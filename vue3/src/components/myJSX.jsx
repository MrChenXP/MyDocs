import { h, ref, onMounted } from 'vue';

// JSX（JavaScript XML）是一种 JavaScript 的语法扩展，它允许你在 JavaScript 代码中编写类似 XML 的结构。
//   它并不是标准的 JavaScript 语法，在代码运行前需要通过 Babel 等工具将其转换为普通的 JavaScript 代码。

/** 使用 jsx 创建函数式组件 */
// export default {
//   name: 'MyJSX',
//   functional: true,
//   render: (h, context) => {
//     return h('div', { className: 'headerTitle' }, [
//       h('h2', '子组件'),
//       h('p', `使用父组件传值: ${context.props.message}`)
//     ]);
//   },
// };


/** 使用defineComponent **/
// import { defineComponent } from 'vue';
// export default defineComponent({
//   name: 'MyJSX',
//   props: {
//     message: {
//       type: String,
//       required: true,
//     },
//   },
//   setup(props) {
//     return () => (
//       <div class="functional-component">
//         <h2>{props.message}</h2>
//       </div>
//     );
//   },
// });

/** 在组合式 API 中使用 jsx */
export default {
  name: 'MyJSX',
  setup(props, { emit }) {
    const count = ref(0);
     
    /** 直接编写HTM标签 **/ 
    const elementProps = { style: { fontSize: '26px', color: 'red' } };
    const element = <p {...elementProps} tabIndex={count.value} >JSX!</p>;
    
    /** 函数组件**/ 
    function Welcome(props) {
      // 定义一个Welcome组件 接收props当做参数 并返回一个jsx对象
      return <p>函数组件, Count {props.name}!</p>;
    }
    // 使用组件 并给name传值
    const elementWelcome = <Welcome name={count.value} type='radio' checked={true} />;

    const elementH = () => h('input', { value: count.value }, 'text');

    const increment = () => {
      count.value++;
      emit('count-updated', count.value);
    };

    onMounted(() => {
      console.log('Component mounted');
    });

    
    /** innerHTML **/ 
    return () => (
      <div class="my-component">
        <element />
        <p>Count: {count.value}</p>
        <elementWelcome />
        <Welcome name={count.value} />
        <elementH />
        <button onClick={increment}>增加</button>
        {
          Array.from({ length: count.value }, (_, index) => index + 1).map(function (todo) {
            return  (
              <li>{ todo }</li>
            );
          })
        }
      </div>
    );
  },
};

