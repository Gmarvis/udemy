// import CreateCourse from "../molecules/createCourse";
// import CourseComponent from '../organisms/courseComponent'
// import MainSlider from '../organisms/mainSlider'


const images = [
  "/a.jpg",
  "b.jpg"
]

interface HomeProps {
  searchParams:string
}

export default async function HomePage({searchParams}: HomeProps) {


  return (
    <main className="w-[100%]">
      {/* <CreateCourse /> */}

      {/* <MainSlider
      images={images}
      /> */}

        <div>

          <div className="flex flex-wrap px-8">
            {/* {courses.map((item:any) => (
              <CourseComponent
                key={item.id}
                data={item} currentUser={null} />
            ))} */}
          </div>

        </div>
    </main> 
  )
}
