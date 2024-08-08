import glob

temples = glob.glob("./imgs/*")

temples = sorted(temples)

for id,img in enumerate(temples):
    tname = img.replace("./imgs/","").replace(".jpeg","")
    print( f"<div id='img_{id}' class='fader'><div class='temple_container'><img height=1216 src='{img}'><div class='temple_name'>{tname}</div></div></div>" )
#    print( f"[ {id}, '{tname}' ]," )
