import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {validationSchema} from "../../../../validation/product"
import { Select, Tag } from 'antd';


function AddProduct() {


    
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });


  const onSubmit = (data) => {
    
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
          render={({ field }) =><input  {...field} type="text"  class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"    placeholder="Enter Description" autofocus="" />
   }
        />
        {errors.description && <p className='text-red-500 text-sm'>{errors.description.message}</p>}
  </div>
  <div>
    <label class=""> Category </label>
    <input type="password" placeholder="Enter Category" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
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
    <div>
      <label class=""> Tags </label>
      <Select
    mode="multiple"
    // tagRender={tagRender}
    // defaultValue={['gold', 'cyan']}
    style={{
      width: '100%',
      minHeight:'32px',
      height:'fit-content',
      marginTop:'8px'
    }}
    options={tagOptions}
  />
    </div>
   
  </div>
  
 <div>
      <label class=""> Discount: <span class="text-sm text-gray-400">(optional)</span> </label>
      <input type="text" placeholder="Enter Discount" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
    </div>
 

  <div>
    <button type="submit" class="mt-5 w-full rounded-md bg-custom-black p-2 text-center font-semibold text-white">Add Product</button>
  </div>
</form>

</div>
  )
}

export default AddProduct