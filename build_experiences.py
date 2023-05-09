import json
import shutil
import subprocess
from pathlib import Path
from typing import List

import tomli


def build_experiences(experience_paths: List[Path], build_dir: Path):
    if build_dir.exists():
        shutil.rmtree(build_dir)

    # Make sure build directory exists
    build_dir.mkdir(parents=True, exist_ok=True)

    # Build each experience in experiences_dir
    for experience_dir in experience_paths:
        # Copy config file, either config.json or config.toml
        if (
            not (config_path := experience_dir / "config.json").exists()
            and not (config_path := experience_dir / "config.toml").exists()
        ):
            raise RuntimeError(
                f"Experience at '{experience_dir}' doesn't have a config file"
            )

        # Read config data
        with open(config_path, "rb") as config_file:
            config = (json if config_path.suffix == ".json" else tomli).load(
                config_file
            )

        experience_name = config["id"]

        # Create experience build directory
        experience_build_dir = build_dir / experience_name
        experience_build_dir.mkdir(parents=True, exist_ok=True)

        # Copy config file to build directory
        shutil.copy(config_path, experience_build_dir)

        if (unlisted := config.get("unlisted")) is None or not unlisted:
            # Copy image files to build directory
            for image_path in (
                experience_dir / "wide.jpg",
                experience_dir / "thumb.jpg",
            ):
                if not image_path.exists():
                    raise RuntimeError(
                        f"Experience '{experience_name}' is missing image file '{image_path.name}'"
                    )
                shutil.copy(image_path, experience_build_dir)

        # Do web build
        web_dir = experience_dir / "web"
        # TODO: Move this into its own function
        if web_dir.exists():
            package_json = web_dir / "package.json"
            # Check if package.json exists, build npm project if so
            if package_json.exists():
                install_output = subprocess.run(["npm", "install"], cwd=str(web_dir))
                if install_output.returncode != 0:
                    raise RuntimeError(
                        f"Failed to install dependencies for {experience_name}"
                    )

                build_output = subprocess.run(["npm", "run", "build"], cwd=str(web_dir))
                if build_output.returncode != 0:
                    raise RuntimeError(f"Failed to build {experience_name}")

                with open(package_json) as package_json_file:
                    package_json_data = json.load(package_json_file)
                if (
                    (package_json_directories := package_json_data.get("directories"))
                    and isinstance(package_json_directories, dict)
                    and (
                        build_pathname := package_json_directories.get("footronStatic")
                    )
                ):
                    static_path = web_dir / build_pathname
                else:
                    static_path = web_dir / "build"
            else:
                static_path = web_dir

            if not static_path.exists():
                raise RuntimeError(
                    f"Web static path {static_path} doesn't exist for {experience_name}"
                )

            static_build_dir = experience_build_dir / "static"

            try:
                # Copy static files to build_dir using subprocess.run
                subprocess.run(
                    ["cp", "-r", str(static_path), str(static_build_dir)]
                ).check_returncode()
            except subprocess.CalledProcessError:
                raise RuntimeError("Failed to copy from build path")


if __name__ == "__main__":
    # Setup argparse
    import argparse

    parser = argparse.ArgumentParser()

    parser.add_argument(
        "experiences",
        type=Path,
        help="Paths to experiences to build",
        nargs="+",
    )
    parser.add_argument(
        "--build-dir",
        type=Path,
        help="Path to directory to build experiences into",
        default=Path("build/experiences"),
    )

    args = parser.parse_args()

    # TODO: Set up diffing so that pull requests do partial builds instead. Should be
    #  fun but a v2 thing for sure.
    # if args.since:
    #     with open(args.since, "rb") as old_experiences_file:
    #         old_experiences = tomli.load(old_experiences_file)
    #     remote_experiences = diff_remote_experiences(
    #         old_experiences, remote_experiences
    #     )

    # TODO: Consider making these into a class once it becomes clear how much state we
    #  need.
    build_experiences(args.experiences, args.build_dir)
