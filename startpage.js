var page = 0;
var mouse_down = false;
var nextpage={
    1: `
        <span>Please re-enter your password.</span>
        <br>
        <input type="password">
        <br>
        <button cont onclick="cont()">Enter</button>
    `,
    2: `
        <span>Please read and accept these terms.</span>
        <br>
        <div style="display: grid; justify-content: center;">
            <div style="background-color: white; width: 15.3vw;
            height: 18.73vh;border-radius: 1.3vw; overflow: auto;">
            <pre>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia convallis aliquam. Fusce gravida porta dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris posuere dolor ipsum, vitae tempus massa vulputate eu. Morbi tempus quam quis nunc posuere condimentum eu a velit. Quisque viverra felis sit amet fermentum semper. Nulla congue, quam quis dictum interdum, elit est iaculis nulla, vel euismod diam sem in elit. Ut in ex at ligula cursus volutpat. Phasellus egestas lacus ut massa blandit, in convallis orci vehicula. Curabitur a auctor quam. Nullam sed elementum enim.

            Quisque imperdiet magna nibh, vitae efficitur diam venenatis et. Maecenas gravida tristique dui, quis suscipit arcu cursus vel. Nam suscipit libero placerat, vulputate nisi quis, venenatis justo. Sed pellentesque mi lacus, quis porttitor arcu ultrices id. Proin malesuada eros enim, ut vehicula ipsum faucibus vitae. Quisque ut volutpat eros. Morbi viverra massa at quam hendrerit eleifend. Curabitur at enim sed libero malesuada vehicula vitae ac tellus.
            
            Aliquam fermentum consectetur diam, at dapibus ipsum pellentesque porttitor. Aliquam consequat ultrices eros, at tempus risus tincidunt at. Ut sit amet ante vitae mauris feugiat pellentesque eu a ligula. Fusce fermentum elit arcu. Aenean maximus, augue at tempus pulvinar, sem leo commodo velit, quis pellentesque risus ipsum sed ligula. Ut turpis arcu, rhoncus congue sapien vestibulum, mattis porta magna. Aenean et augue sed eros tincidunt egestas at vel velit. Curabitur nulla sapien, dictum vitae venenatis vel, maximus eget nunc. Mauris at dolor augue. Aenean laoreet velit id enim ultricies suscipit. Sed mollis efficitur quam, ac faucibus ligula dapibus at. Ut auctor diam in ipsum ultrices pulvinar. Morbi ultrices, odio vitae tristique tincidunt, elit nisl sagittis purus, sed efficitur libero dui eget quam.
            
            Nulla sodales arcu at nibh malesuada consectetur. Etiam non libero tincidunt, imperdiet est maximus, lacinia neque. Morbi sodales turpis non metus blandit, a pretium justo mattis. Pellentesque purus urna, ultricies vitae odio ac, maximus pellentesque lectus. In vel dui et risus maximus porta eget in quam. Nullam faucibus arcu at sem ultrices egestas. Mauris non dolor semper, consectetur libero id, porta quam. Sed eu libero et risus imperdiet sollicitudin. Etiam vulputate, turpis sed iaculis pretium, diam velit dignissim nunc, sed varius lorem dolor sit amet eros. Cras scelerisque nunc a purus congue, ultricies viverra mauris egestas. Mauris scelerisque felis ut dui porta elementum. Donec pretium urna id odio elementum tristique. Donec convallis turpis lacinia tellus lobortis rutrum. Nulla quis finibus ex, ac egestas mauris. Sed eget risus in enim auctor porta eu id ipsum. Proin vel porta mi.
            
            Cras gravida purus nec placerat pellentesque. Etiam quis ex porta, ornare quam vel, consectetur mi. Mauris cursus fringilla mi, eu placerat augue mollis id. Maecenas feugiat augue quis mi sodales, eu viverra eros tristique. Proin eu mauris consectetur, bibendum nibh sit amet, lacinia nisi. Donec cursus vestibulum mauris ut aliquam. Nulla scelerisque vestibulum volutpat. Duis diam sem, posuere nec lorem in, gravida egestas nisl. Quisque lobortis quis lorem nec volutpat. Integer et pharetra urna, sed mattis lectus. Donec vel mi at velit ullamcorper facilisis. Suspendisse vel lacus a arcu gravida euismod. Quisque leo orci, accumsan eget congue et, porttitor et magna.
            </pre>
            </div>
        </div>
    `
}
function cont(){
    page++;
    document.querySelector("[inner]").innerHTML = nextpage[page];
}
function move(event){
    if(mouse_down){
        document.querySelector("[start_window]").style.left=((event.clientX/window.innerWidth)*100-50)+"vw";
        document.querySelector("[start_window]").style.top=((event.pageY*100)/window.innerHeight-20.3)+"vh";
        //document.querySelector("[start_window]").style.top=((100*event.pageY)/window.innerHeight-(window.innerHeight/40))+"vh";
    }
}

window.addEventListener("mousedown", function(){
    mouse_down = true;
})

window.addEventListener("mouseup", function(){
    mouse_down = false;
})