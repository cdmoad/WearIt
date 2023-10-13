import React,{useState,useRef} from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {validationSchema} from "../../../../validation/product"
import { Select, Tag } from 'antd';
import TextArea from 'antd/es/input/TextArea';


function AddProduct() {

const tagRef= useRef('')
const [tagList,setTagList] = useState([])
    
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });


  const onSubmit = (data) => {
 
    console.log('am there');
    console.log(data.title)
    console.log(data.description)
    console.log(data.price)
    console.log(data.stock)
    console.log(data.category)
    console.log(data.discount)

   };


   const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };

   const colorOptions = [
    {
      value: 'black',
    },
    {
      value: 'white',
    },
    {
      value: 'yellow',
    },
    {
      value: 'green',
    },
    {
      value: 'blue',
    },
    {
      value: 'red',
    },
    {
      value: 'indigo',
    },
    {
      value: 'purple',
    },
    {
      value: 'pink',
    },
  ];

   const sizeOptions = [
    {
      value: 'XS',
    },
    {
      value: 'S',
    },
    {
      value: 'M',
    },
    {
      value: 'L',
    },
    {
      value: 'XL',
    },
    {
      value: 'XXL',
    },
   
  ];

  const tagOptions = [
    {
      value: 'AquaThreads',
    },
    {
      value: 'Large ',
    },
    {
      value: '60% Cotton, 40% Polyester',
    },
    {
      value: 'Made in Vietnam',
    },
    {
      value: 'RN12345',
    },
    {
      value: 'Machine wash warm',
    },
   
  ];


  function addTag(event) {

    if (event.key === 'Enter' && event.value!='') {
      
      const tag = tagRef.current.value;
          setTagList([...tagList, tag])
          tagRef.current.value = ''
 
    }
  }

  function removeTag(tag) {
    setTagList(tagList.filter((item) => item !== tag));
  }

  return (
    <div class="lg:m-10  ">
  <form onSubmit={handleSubmit(onSubmit)} class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-md lg:p-10">
  <h1 class="mb-6 text-xl font-semibold lg:text-2xl">Add Product</h1>

  <div class="grid gap-3 md:grid-cols-2">
    <div> 
      <label class=""> Title </label>
      <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"    placeholder="Enter Title" autofocus="" />
   }
        />
        {errors.title && <p className='text-red-500 text-sm'>{errors.title.message}</p>}
    </div>
    <div>
      <label class=""> Stock </label>
      <Controller
          name="stock"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"    placeholder="Enter Stock" autofocus="" />
   }
        />
        {errors.stock && <p className='text-red-500 text-sm'>{errors.stock.message}</p>}
    </div>
  </div>
  <div>
    <label class=""> Price </label>
    <Controller
          name="price"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"    placeholder="Enter Price" autofocus="" />
   }
        />
        {errors.price && <p className='text-red-500 text-sm'>{errors.title.price}</p>}
  </div>
  <div>
    <label class=""> Description </label>
    <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) =><textarea  {...field} type="text"     class="mt-2 max-h-64 h-32  w-full rounded-md bg-gray-100 px-3 py-3"    placeholder="Enter Description" autofocus="" />
   }
        />
        {errors.description && <p className='text-red-500 text-sm'>{errors.description.message}</p>}
  </div>
  <div>
    <label class=""> Category </label>
    <Select
  
    // tagRender={tagRender}
    // defaultValue={['gold', 'cyan']}
    style={{
      width: '100%',
      height:'32px',
      marginTop:'8px'
    }}
    options={colorOptions}
  /> 
 </div>
  <div class="grid gap-3 lg:grid-cols-2">
    <div>
      <label class=""> Color </label>
      <Select
    mode="multiple"
    // tagRender={tagRender}
    // defaultValue={['gold', 'cyan']}
    style={{
      width: '100%',
      height:'32px',
      marginTop:'8px'
    }}
    options={colorOptions}
  />
    </div>
    <div>
      <label class=""> Size </label>
      <Select
    mode="multiple"
    // tagRender={tagRender}
    // defaultValue={['gold', 'cyan']}
    style={{
      width: '100%',
      height:'32px',
      marginTop:'8px'
    }}
    options={sizeOptions}
  />
    </div>
    
  </div>

  <div className=''>
      <label class=""> Tags </label>
      <input type="text"  ref={tagRef}
        onKeyPress={addTag} placeholder="Enter Tags" class="mt-2 h-8 w-full border rounded-md bg-white  px-3" />
       <p className='  mt-1 mr-1    text-sm   '> <div className='text-base flex '>{tagList?.map((tag)=>{return(<div className='flex mr-1 bg-slate-100 py-0.5 px-2 w-fit   rounded-md '><div >#{tag}</div> <div className='text-base ml-1 hover:scale-110 cursor-pointer' onClick={()=>removeTag(tag)}> &times;</div></div>)})}</div>  </p>
  </div> 
   
 <div>
 <label class=""> Discount: <span class="text-sm text-gray-400">(optional)</span> </label>
<Controller
          name="discount"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="number" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"    placeholder="Enter Discount" autofocus="" />
   }
        />      
    </div>
 
  <div>
    <button type="submit" class="mt-5 w-full rounded-md bg-custom-black p-2 text-center font-semibold text-white">Add Product</button>
  </div>
</form>

</div>
  )
}

export default AddProduct