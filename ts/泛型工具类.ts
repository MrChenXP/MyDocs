// Partial
  // Partial<Type>用来构造(构建)一个类型,将Type的所有属性设置为可选
  interface Props {
    id: string
    children: number []
  }
  type PartialProps = Partial<Props> // 新类型PartialProps结构和Props相同,但所有属性变为可选

// Readonly
  // Readonly<Type>用来构造(构建)一个类型,将Type的所有属性设置为只读
  interface Props {
    id: string
    children: number []
  }
  type ReadonlyProps = Readonly<Props> // 新类型PartialProps结构和Props相同,但所有属性变为只读

  // Pick
    // Pick<Type, Keys> 从Type中选择一组属性来构造新类型
    interface Props {
      id: string
      title: string
      children: number []
    }
    type PickProps = Pick<Props, 'id' | 'children'> // 构造出来的类型,只有id|children两个属性类型

// Record<Keys, Type> 构造一个对象类型,属性键为keys,属性类型为Type
    type RecordObj = Record<'a' | 'b' | 'c', string[]>
    type RecordObj2 = Record<'a' | 'b' | 'c', string[]>
    let obj: RecordObj = {
      a: ['jack'],
      b: ['rose'],
      c: ['tar ']
    }

