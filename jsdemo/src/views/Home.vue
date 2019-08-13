<template>
  <div class="home">
    <button @click="debounceclick">
      123
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import '../tool/fangdou.js'


@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  debounce(fn, delay) {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, delay);
    };
  }
  debounceclick(){
    let _=require('lodash');
    _.debounce(this.handleClick(),2000,false)
    // this.debounce(()=>{console.log(886)}, 500)();
  }

  handleClick() {
    console.log(888);
  }
  deepClone(source){
    const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
    // console.log(targetObj);
    for(let keys in source){ // 遍历目标
      // console.log('keys'+keys);
      if(source.hasOwnProperty(keys)){
        if(source[keys] && typeof source[keys] === 'object'){ // 如果值是对象，就递归一下
          targetObj[keys] = source[keys].constructor === Array ? [] : {};
          targetObj[keys] = this.deepClone(source[keys]);
        }else{ // 如果不是，就直接赋值
          targetObj[keys] = source[keys];
        }
      }
    }
    return targetObj;
  }
  shallowClone(source) {
    const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
    for (let keys in source) { // 遍历目标
      if (source.hasOwnProperty(keys)) {
        if(source[keys] && typeof source[keys] === 'object'){
          targetObj[keys] = source[keys].constructor === Array ? [] : {};
          targetObj[keys] = this.shallowClone(source[keys]);
        } else{
          targetObj[keys] = source[keys];
        }

      }
    }
    return targetObj;
  }
  mounted(){
    const debounce = (fn, delay) => {
      let timer = null;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    };
    for(let i=0;i<1000;i++){
      // debounce(()=>{console.log(885)}, 500)();
    }
    // const originArray = [1,2,3,4,5];
    // const originObj = {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};
    //
    // const cloneArray = originArray;
    // const cloneObj = originObj;
    //
    // console.log(cloneArray); // [1,2,3,4,5]
    // console.log(originObj); // {a:'a',b:'b',c:Array[3],d:{dd:'dd'}}
    //
    // cloneArray.push(6);
    // // cloneObj.a = {1:'aa'};
    //
    // console.log(cloneArray); // [1,2,3,4,5,6]
    // console.log(originArray); // [1,2,3,4,5,6]
    //
    // console.log(cloneObj); // {a:{aa:'aa'},b:'b',c:Array[3],d:{dd:'dd'}}
    // console.log(originArray); // {a:{aa:'aa'},b:'b',c:Array[3],d:{dd:'dd'}}
    // let originArray = [1,2,3,4,5];
    // let cloneArray = JSON.parse(JSON.stringify(originArray));
    // console.log(typeof cloneArray);
    // console.log(typeof originArray);
    // console.log(cloneArray === originArray); // false
    //
    //
    // const originObj = {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};
    // const cloneObj = JSON.parse(JSON.stringify(originObj));
    // console.log(cloneObj === originObj); // false
    // cloneObj.a = 'aa';
    // cloneObj.c = [1,1,1];
    // cloneObj.d.dd = 'doubled';
    // console.log(cloneObj); // {a:'aa',b:'b',c:[1,1,1],d:{dd:'doubled'}};
    // console.log(originObj); // {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};


    // const originObj = {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};
    // const cloneObj = this.deepClone(originObj);
    // console.log(cloneObj);
    // console.log(cloneObj === originObj); // false
    //
    // cloneObj.a = 'aa';
    // cloneObj.c = [1,1,1];
    // cloneObj.d.dd = 'doubled';
    //
    // console.log(cloneObj); // {a:'aa',b:'b',c:[1,1,1],d:{dd:'doubled'}};
    // console.log(originObj); // {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};
    // const originObj = {
    //   name:'axuebin',
    //   sayHello:function(){
    //     console.log('Hello World');
    //   }
    // }
    // console.log(originObj); // {name: "axuebin", sayHello: ƒ}
    // const cloneObj = this.deepClone(originObj);
    //
    // console.log(cloneObj); // {name: "axuebin", sayHello: ƒ}
    // console.log(cloneObj === originObj); // false
    // cloneObj.sayHello = () =>{
    //   console.log(886);
    // }
    // cloneObj.sayHello();
    // originObj.sayHello();


    // const originArray = [1,[1,2,3],{a:1}];
    // const cloneArray = originArray.slice(0);
    // console.log(cloneArray);
    // console.log(cloneArray === originArray); // false
    // cloneArray[1].push(4);
    // cloneArray[2].a = 2;
    // console.log(originArray); // [1,[1,2,3,4],{a:2}]
    // console.log(cloneArray); // [1,[1,2,3,4],{a:2}]

    const originObj = {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};
    const cloneObj = this.shallowClone(originObj);
    console.log(originObj)
    console.log(cloneObj)
    console.log(cloneObj === originObj); // false
    cloneObj.a='aa';
    cloneObj.c= [];
    cloneObj.d.dd = '886'


  }

}
</script>
