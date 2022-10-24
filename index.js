const closure = counter => {
    return count = () => {
        if(counter < 1){
            console.log('Hi, you called me!');
            counter ++;
        }else{
            console.log('You, already called me!')
        }
    }
}
const counterClosure = closure(0)
counterClosure();
counterClosure();
counterClosure();
counterClosure();
counterClosure();