const myObject_1 = {
    key1: 'value1',
    key2: 'value2',
    key3 : {
      key1_1: 'valueX',
      key2_1: 'valueY',
      keyX: {
        
      }
    }
  };

  for (const nested_key in myObject_1) {
    console.log(nested_key + " : " + myObject_1[nested_key]);
  }