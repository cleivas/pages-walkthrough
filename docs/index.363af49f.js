const t=new class{#t=0;#e=!1;#n;constructor(){}isRunning(){return this.#e}start(){this.#t=0,document.querySelector("p").innerText=this.#t,this.#n=setInterval(this.#i.bind(this),1e3),this.#e=!0}stop(){clearInterval(this.#n),this.#e=!1}#i(){this.#t++,document.querySelector("p").innerText=this.#t}};console.log(t),document.querySelector("button").addEventListener("click",(function(){t.isRunning()?(t.stop(),document.querySelector("button").innerText="Start"):(t.start(),document.querySelector("button").innerText="Stop")}));
//# sourceMappingURL=index.363af49f.js.map
