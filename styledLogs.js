function styledOptions(message, data, options){

  //default options not used for clarity
  let opts = {
    background : '#1ecbe1',
    fontSize: "19px",
    fontFamily: "monospace",
    color: "black"
  };

  //if an options object appears update the default object properties
  if(options){
    opts = {...options};
    if(data){
      return console.log(`%c${message}`, `background-color:${opts.background}; font-size:${opts.fontSize}; font-family:${opts.font}; color:${opts.color};`, data);
    }else{
      return console.log(`%c${message}`, `background-color:${opts.background}; font-size:${opts.fontSize}; font-family:${opts.font}; color:${opts.color};`);
    }
  }else{
    if( data){
      return console.log(`%c${message}`, `background-color:${opts.background}; font-size:${opts.fontSize}; font-family:${opts.font}; color:${opts.color};`, data );
    }else{
      return console.log(`%c${message}`, `background-color:${opts.background}; font-size:${opts.fontSize}; font-family:${opts.font}; color:${opts.color};`);
    }
  }

}
