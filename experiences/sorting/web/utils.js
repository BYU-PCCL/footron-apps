const mergeSortElmt = document.getElementById("merge-parent");
const insertionElmt = document.getElementById("insertion-parent");
const quickElmt = document.getElementById("quick-parent");
const bubbleSortElmt = document.getElementById("bubble-parent");

function draw_slice(sketch, total, index, radius, clr) {
    //function to be called by draw_slices to draw individual slice determined by index
    //color and size remain attached to correct index, the orientation around center
    //changes dependent on shuffled and sorted index
    const theta = sketch.TAU / total;
    const first_theta = -1 * (theta * index) + sketch.HALF_PI;
    const second_theta = -1 * (theta * (index + 1)) + sketch.HALF_PI;

    //draw triangles, individualized, 
    //fill in and stroke same color combination, determined by HSL in draw_slices
    sketch.fill(clr, 70, 55);
    sketch.stroke(clr, 70, 55);

    sketch.push();

    //translate coordinates to be centered on page
    sketch.translate(sketch.width / 2, sketch.height / 2)

    sketch.beginShape();
    sketch.vertex(0, 0);

    //rotate the slices to be alligned according to index
    sketch.vertex(radius * sketch.cos(first_theta), -1 * radius * sketch.sin(first_theta));
    sketch.vertex(radius * sketch.cos(second_theta), -1 * radius * sketch.sin(second_theta));

    sketch.endShape(sketch.CLOSE);
    sketch.pop();
};

export let config = {
    canvas_size: 550,
    min_radius: 75,
    max_radius: 250,
    frameRate: 32.5,
    slice_count: 74, // 32,
    completeStatus: [false, false, false, false],
    restartCallbacks: [],
    complete(index, restart) {
        // indices: merge = 0, insertion = 1, quick = 2, bubble = 3
        this.completeStatus[index] = true;
        this.restartCallbacks.push(restart);
        console.log(this.completeStatus)
        if (this.completeStatus.every(x => x === true)) {
            setTimeout(() => {
                this.restartCallbacks.forEach(cb => cb())
                this.restartCallbacks = [];
                this.completeStatus = [false, false, false, false];
            }, 4000);
        }
    },
    initializers: []
}

function messageHandler(message) {

    const handlers = {
        slices: sliceCountHandler,
        speed: speedHandler,
        selection: checkBoxHandler,
    }

    handlers[message.type](message.value);
};

function sliceCountHandler(value) {
    config.slice_count = Math.floor(value * 59) + 15;
    config.initializers.forEach(initializer => initializer())
}

function speedHandler(value) {
    console.log(value)
    config.frameRate = Math.floor(value * 55) + 5;
}

function checkBoxHandler(value) {
    const elements = [bubbleSortElmt, insertionElmt, quickElmt, mergeSortElmt];
    for (let i = 0; i < 4; i++) {
        elements[i].style.display = value[i] === false ? "none" : "block"
    }
}

const client = new FootronMessaging.Messaging();
client.mount();
client.addMessageListener(messageHandler);


export function draw_slices(sketch, array, minRadius, maxRadius) {
    //grab constant radius delta, only dependent on size of aaray (could be sliders?)
    const radiusDelta = (maxRadius - minRadius) / array.length;

    //create color per array to be evenly spaced throughout HSL
    const hueDelta = 320 / array.length;

    //draw slice per array
    array.forEach((value, index) => {
        draw_slice(sketch, array.length,
            index,
            minRadius + (radiusDelta * value),
            320 - (hueDelta * value));
    });
};

