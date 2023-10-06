let cvs = document.querySelector("canvas")
let ctx = cvs.getContext("2d");

cvs.width = cvs.clientWidth;
cvs.height = cvs.clientHeight;

let bird = {
    x: 0, y: 0, scale: 60,
    up: false
}
let pipesGap = 200;
let gap = 200;
let width = 80;

let pipes = [{
    x: cvs.width,
    height: Math.min(Math.round(Math.random() * cvs.height), cvs.height * 0.5),
}]
let speed = 4;

window.addEventListener("keydown", (key) => {
    if (key.keyCode == 32) {
        bird.up = true
    } else {
    }
})
window.addEventListener("keyup", (key) => {
    if (key.keyCode == 32) {
        bird.up = false
    } else {
    }
})
function animate() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);


    ctx.fillStyle = "skyblue"
    ctx.fillRect(0, 0, cvs.width, cvs.height)

    ctx.fillStyle = "yellow"

    if (bird.y >= cvs.height - bird.scale) {
        bird.y = cvs.height - bird.scale;
    } else if (bird.up) {
        bird.y -= 10
    } else {
        bird.y += 10;
    }
    bird.x = 30;
    ctx.fillRect(bird.x, bird.y, bird.scale, bird.scale)

    pipes.forEach((pipe) => {

        let pipeDownHeight = cvs.height - pipe.height - gap;
        ctx.fillStyle = "green";
        ctx.fillRect(pipe.x, 0, width, pipe.height);

        ctx.fillRect(pipe.x, cvs.height - pipeDownHeight, width, pipeDownHeight);

        pipe.x -= speed;
        // console.log(pipe.x)
        if ((pipe.x == 29)) {
            // let lastPipe = pipes[pipes.length - 1];
            pipes.push({
                x: cvs.width,
                height: Math.min(Math.round(Math.random() * cvs.height), cvs.height * 0.5),
            })
        }
        if (pipe.x < 0) {
            // pipes.pop()
        }
        if((pipe.x) ==(bird.x+bird.scale)) (
            console.log("fgg")
        )

    })

    requestAnimationFrame(animate)
}

animate()