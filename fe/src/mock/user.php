$a = array(
        array(
          'key'=>'1',
          'name'=>'John Brown',
          'age'=>32,
          'sex'=> '女',
          'tel'=>'18608447800'
        ),
        array(
          'key'=> '2',
          'name'=> 'Jim Green',
          'age'=> 42,
          'sex'=>'女',
          'tel'=>'18608447800'
        ),
        array(
          'key'=> '3',
          'name'=> 'Joe Black',
          'age'=> 32,
          'sex'=>'女',
          'tel'=> '18608447800'
        )
    );
echo json_encode($a);