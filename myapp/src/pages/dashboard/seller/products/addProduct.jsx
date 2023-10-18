import React,{useState,useRef} from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {validationSchema} from "../../../../validation/product"
import { Select, Tag } from 'antd';
import {useAddProduct} from "../../../../queries/productsQuery"
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import './style.css'
 


function AddProduct() {

const tagRef= useRef('')
const [tagList,setTagList] = useState([])

const [colors, setColors] = useState([]);
const [sizes, setSizes] = useState([]);
const [categories, setCategories] = useState([]);
 

    
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const addProductMutation = useAddProduct();
    async function onSubmit (data) {
 
    data.tags=tagList
    data.colors=colors
    data.sizes=sizes
    data.categories=categories
    data.images=fileList

    try {
      await addProductMutation.mutateAsync(data);
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }

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

  const categoryOptions = [
    {
      value: 'cat1',
    },
    {
      value: 'cat2 ',
    } 
   
  ];



  function addTag(event) {

    if (event.key === 'Enter' && event.target.value!='') {
      event.preventDefault()
      const tag = tagRef.current.value;
          setTagList([...tagList, tag])
          tagRef.current.value = ''
 
    }
  }

  function removeTag(tag) {
    setTagList(tagList.filter((item) => item !== tag));
  }


  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
 
  

  return (
    <>

    <div className="lg:m-1 bg-white border border-gray-100 shadow-sm  " >
     <h1 className="py-3 ml-5 text-base font-semibold lg:text-lg font-custom-secondary text-custom-black">Add Product</h1>
  <hr/> 
  <form  onSubmit={handleSubmit(onSubmit)} className="relative   space-y-3 max-w-screen mx-auto rounded-md  p-6  lg:p-10">
 
  <div className="grid gap-3 md:grid-cols-2">
    <div> 
      <label className="font-custom-primary"> Title: </label>
      <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text" className="mt-2 h-[35px] w-full rounded-md border border-gray-200 px-3 outline-none"    placeholder="Enter Title" autofocus="" />
   }
        />
        {errors.title && <p className='text-red-500 text-sm'>{errors.title.message}</p>}
    </div>
    <div>
      <label className="font-custom-primary"> Stock: </label>
      <Controller
          name="stock"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="number" className="mt-2 h-[35px] w-full rounded-md border border-gray-200 px-3 outline-none"    placeholder="Enter Stock" autofocus="" />
   }
        />
        {errors.stock && <p className='text-red-500 text-sm'>{errors.stock.message}</p>}
    </div>
  </div>
  <div>
    <label className="font-custom-primary"> Price: </label>
    <Controller
          name="price"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text" className="mt-2 h-[35px] w-full rounded-md border border-gray-200 px-3 outline-none"    placeholder="Enter Price" autofocus="" />
   }
        />
        {errors.price && <p className='text-red-500 text-sm'>{errors.title.price}</p>}
  </div>
  <div>
    <label className="font-custom-primary"> Description: </label>
    <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) =><textarea  {...field} type="text"     className="mt-2 max-h-64 h-32  w-full rounded-md border border-gray-200 px-3 py-3 outline-none"    placeholder="Enter Description" autofocus="" />
   }
        />
        {errors.description && <p className='text-red-500 text-sm'>{errors.description.message}</p>}
  </div>
  <div>
    <label className="font-custom-primary"> Category: </label>
    <Select
  
    // tagRender={tagRender}
    // defaultValue={['gold', 'cyan']}
    style={{
      width: '100%',
      height:'35px',
      marginTop:'8px'
    }}
    options={categoryOptions}
    onChange={(value)=>setCategories(value)}
  /> 
 </div>
  <div className="grid gap-3 lg:grid-cols-2">
    <div>
      <label className="font-custom-primary"> Colors: </label>
      <Select
    mode="multiple"
    // tagRender={tagRender}
    // defaultValue={['gold', 'cyan']}
    style={{
      width: '100%',
      height:'35px',
      marginTop:'8px'
    }}
    options={colorOptions}
    onChange={(value)=>setColors(value)}
     
  />
    </div>
    <div>
      <label className="font-custom-primary"> Sizes: </label>
      <Select
    mode="multiple"
    // tagRender={tagRender}
    // defaultValue={['gold', 'cyan']}
    style={{
      width: '100%',
      height:'35px',
      marginTop:'8px'
    }}
    options={sizeOptions}
    onChange={(value)=>setSizes(value)}
  />
    </div>
    
  </div>

  <div className=''>
      <label className="font-custom-primary"> Tags: </label>
      <input type="text"  ref={tagRef}
        onKeyPress={addTag} placeholder="Enter Tags" className="mt-2 h-[35px] w-full border rounded-md   border-gray-200  px-3 outline-none" />
       <p className='  mt-1 mr-1    text-sm   '> <div className='text-base flex '>{tagList?.map((tag)=>{return(<div className='flex mr-1 bg-slate-100 py-0.5 px-2 w-fit   rounded-md '><div >#{tag}</div> <div className='text-base ml-1 hover:scale-110 cursor-pointer' onClick={()=>removeTag(tag)}> &times;</div></div>)})}</div>  </p>
  </div> 
   
 <div>
 <label className="font-custom-primary"> Discount: <span className="text-sm text-gray-400">(optional)</span> </label>
<Controller
          name="discount"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="number" className="mt-2 h-[35px] w-full rounded-md border border-gray-200 px-3 outline-none"    placeholder="Enter Discount" autofocus="" />
   }
        />      
    </div>

    <div className=''>
      <label className="font-custom-primary"> Images: </label>
      <style>
        {`
          .ant-image-crop {
            background-color: blue;
          }
        `}
      </style>
      <div className='mt-2 ' >
         
         <ImgCrop rotationSlider >
         
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
      </div>
     
   </div> 
 
  <div className='flex justify-end'>
    <button type="submit" className="mt-5 w-fit px-4   bg-custom-black p-2 text-center   border border-gray-200 font-custom-secondary text-white">Add Product</button>
  </div>
</form>

</div>
</>
  )
}

 
export default AddProduct