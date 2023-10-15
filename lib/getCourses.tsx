import { CourseType } from "@/types";


export  const fetchedCourses = async(): Promise<CourseType[]> => {
    const data = await fetch('http://localhost:3500/couses').then((response) => response.json()).catch(err  => {
      if(err instanceof Error)
        console.log(err.message)
  });
  return data;
  }

  // fetchedProducts().then(products =>{
  //   console.log(products);
    
  // })
