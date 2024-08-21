const myOjects={
    js:'javascripts',
    cpp:'C++',
    rb:'ruby',
    swift:'swift'
}

for (const key in myOjects) {
    // console.log(`${key} shortcut is for ${myOjects[key]}`);
    
}

const programming=['java','c++','python','c','ruby'];
for (const key in programming) {
    console.log(programming[key]);
    
}
const map=new Map();
map.set('IN','India')
map.set('USA','United State of America')
map.set('Fr','France')
map.set('In','India')
for (const key in map) {
   console.log(key);//it can not be iterate
   
}