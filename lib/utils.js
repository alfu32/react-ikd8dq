
export function rangeIterator(_start,_end=0){
    const start=Math.min(_start,_end);
    const end=Math.max(_start,_end);
    const mem={index:start}
    return function *(){
      if(mem.index<end)yield (mem.index++);
    }
}
export function range(_start,_end=0){
    const start=Math.min(_start,_end);
    const end=Math.max(_start,_end);
    return new Array(end-start+1).fill(null).map( (v,i)=> start+i )
}
export function kebapCase(_string){
    const string = _string[0].toUpperCase() + _string.slice(1);
    const caps = string.match(/[A-Z]/g);
    const wordFragments = string.split(/[A-Z]/g).slice(1);
    return range(caps.length-1).map( i => caps[i].toLowerCase() + wordFragments[i] ).join("-")
}