function preload(){
}
function setup(){
    canvas= createCanvas(500, 500);
    canvas.center;
    video= createCapture(VIDEO);
    video.size(250, 250);
    video.hide();
}
function draw(){
    image(video, 100, 100, 250, 250);
    ellipse(56, 46, 55, 55);
    rect(40, 75, 25, 350);
    ellipse(56, 450, 55, 55);
    rect(450, 75, 25, 350);
    ellipse(460, 450, 55, 55);
    ellipse(460, 46, 55, 55);
    rect(85, 440, 350, 25);
    rect(85, 46, 350, 25)
}
function take_snapshot(){
    save('myFilterimage.png')
}