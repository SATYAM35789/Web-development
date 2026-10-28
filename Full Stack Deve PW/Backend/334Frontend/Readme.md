## Lecture 335 

### Setting up eslint and react hot toast :- 

React router ko configure kar rahe hai, so iske liye main.jsx mai jao. React-Router ko enable karne ke liye purre app mai toh hamko Browser component se wrap karna hota hai <BrowserRouter>
- So yaha ham ek kaam aur kar lete hai , saare imports ko structured kar lete hai. 
   1. Libaray component ko ek side 
   2. Components imports ko ek saath
   3. CSS imports 

-> So ye karne se ReactRouter ki capabilities saare app mai applicable ho jati hai. So purre app mai Routuing easily kar paa rahe hote hai. 

Route :- Ek route ek url ko, ek particular components se map kar deta hai. So agar bahut saare roytes hai hai toh pahle (<Routes> </Routes>) Routes  component import karna hoga then uske ander individuals routes daalenge. (in the App.jsx)

Individuals Routes :-
Konse url ko kis component ke sath map karna hai.  
```jsx
{/* Route path= "/" element = {<Home/>}  </Route>*/} 
```

So ab app.jsx mai imports hai , so inko bhi rearrange karna hoga. So baar baar karna rearrange is waste and difficult, so for that we have the eslint.config.js jo vite deta hai automatically. 

So we have the plugins :-eslint-plugin-simple-import-sort isko install karo 
then isko configure karne hai. So agar ham chahte hai ki jab bhi ham imports kare aur automatically sort ho jaaye then we have 


1. Add Rules in '.eslint.config.js' 
Show error when the imports are not sorted 
```
'simple-import-sort/imports': 'error',
```

Add : plugins :- 
```
'simple-import-sort': simpleImportSort,
```

2. To enable auto imports sort on file save in vscode 
vscode settings ko open karo -> search for settings -> edit in setting.json ko open karo -> ye add kardo
```js
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }

```

- Eslint ki aur bhi configuations hoti hai like 
1. eslint config to add semicolon 

### Now we are going to congig the react hot toast
- Iske install karne ke baad <Toaster/>  naam ka component milta hai. So isko just jaakar main.jsx mai use kar le so ki ye purre app mai applicable ho
- Activate the toaster :- 
   - go the documentation 

Help in the UI creating. 


## Lecture 336  : Setting up redux store and basic auth slice 
So we are going to setup for the state management 

1. New Folder :- Name Slices
   1. Create 1st Slice : like Auth slice

Before making the auth slice we should make the store  (redux store).
  1. Create a store.js file. 

Note : Upper ke dono ko Redux floder ke ander daal do. 

- In store file 
  1. Redux toolkit use kar rahe so hamko createStore karne se bahter hai, configureStore use kare. 
  ``` js
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {},
    devTools: true
});

export default store;
  ```

  2. Store ko cinfigure karo app component ke sath
  In main jsx use provider component which come from the react redux
  ```

  ```
  So store setup hone ke baad jasie jaise ham slices banate jayenge waise waise reducer milte jayenge ham add karte jayenge. 

Creating AuthSlice :- AuthSlice.js
  - So this slice is for the authenetication purpose. So iski state mai bhi usi tyoe ki property rakhenge. 
   like isLoggedIn

## Lecture 337 : Setting up axios instance 
So ham backend ke sath intract karne waale hai so we need to axios setup. So call ko ham directly use kar rahe the . Usme koi problem nahi hai, But if we have the dedicated axios then har jagah axios(commom axios) ki same configuration  ho raha hoga.

-> Helpers -> axiosinstance.js

```js
import axios from "axios";

const BASE_URL = "http://localhost:5014/api/v1";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.defaults.withCredentials = true;

// And there is more such property of axios instance defaults (google search) (config defaults)
//  timeout axios :- So ham yaha ye set kar denge agar request is time ke ander nahi aayega then request ko abort kardo

export default axiosInstance;
```

## Lecture 338 : Writing footer :- 
components -> Footer.jsx

-> So yaha react icons ke bs components ko use karne waale hai. (search : react icons bs)
-> Kyuki ham vite se app bana rahe so hamko dobara se npx tailwindcss init -p run karna hoga, ye ek postcss lakar dega , jo ek tarag ki dependencies hai, we have to use this to run the tailwind

-> Dekho isko run karwaane ke liye app.jsx ke bajaaye kahi aur import kare jaha alag section ke ui ko rakhenge aur jaha sabko rakje usko sirf app.jsx mai la de. 
  -> So layout component banayenge jo expect karega children props im react search it in the google. 

## Lecture 339 : Layout and homepage 
Different section mai different tarah ki layout hoti hai like user ke liye ui alag dikhega and admin ke liye alag dikhega. 
So the better option is to use the layout , jis kisi bhi page ko jis bhi tarah layout mai show karna chahte hai n, ham usko customize kar paaye. Aur app jsx mai page ke routings ko he sirf show kare. 

Layout : Ye bhi ek component hoga jiske ander ham purra structure defined karenge like header,etc. It expect the promp of children type. props may bhi num, strings, other javascript variable. So ek component aa raha hoga as prompt. 
-> Jab ham jsx component ke ander ek aur jsx component pass kar dete hai then usko children kahte hai. Jo ander wala hai children wo parent ko recive hota hai access using children prompt by the parent. 

Layouts -> HomeLayout.jsx
  - daizyui install kiye the -> iske ander ek component hota hai drawer naam ka isko use karenge
```
  import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
function HomeLayout() {

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = 0;
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle")
        element[0].checked = false

        changeWidth();
    }
    return (
        <>
            <div className="min-h-[90vh]  ">
                <div className="drawer absolute left-0 z-50 w-fit">
                    <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="cursor-pointer relative ">
                            <FiMenu
                                size={"32px"}
                                className='font-bold text-white m-4'
                                onClick={changeWidth}
                            />


                        </label>
                    </div>
                    <div className="drawer-side w-0">
                        <label htmlFor='my-drawer ' className='drawer-overlay'>
                        </label>
                        <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative" >
                            <li className='w-fit absolute right-2 z-50'>
                                <button onClick={hideDrawer}>
                                    <AiFillCloseCircle size={24} />
                                </button>
                            </li>
                            <li>
                                <Link to={"/"}> Home </Link>
                            </li>

                            <li>
                                <Link to={"/courses"}> All Courses </Link>
                            </li>

                            <li>
                                <Link to={"/contact"}> Contect us </Link>
                            </li>

                            <li>
                                <Link to={"/about"}> About us </Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
export default HomeLayout; 
```

-> Element visible hai but working abhi kuch nahi hai, Integrating more so that we can make it workable. So achhe se visalize karne ke liye , ek page banayenge, on that page we starting using. 
  -> HomeLayouts mai children pass kar denge , so then jaha se bhi agar is layout ko call kar rahe honge, waha ye children components ko render karega. 
  -> So jo bhi pages ham inko alag directory mai rakh sakte hai, uske ander jo bhi page create kar rahe honge, then purre page ko HomeLayouts components wrap karenge. 
  -> Dekho sirf ye karne se ab ham jo bhi yaha likhenge wo pahle HomeLayout mai jayega 
    ```
     return(
        <HomeLayout>
            
        </HomeLayout>
    )
    ```
     so iske ander kuchh bhi likh rahe means ki isko as child prop bhej rahe hai. which means ki children ko set up kar rahe hai. (page->HomePage)

### Lecture 340 : Adding Actions buttons on sidebar (HomeLayouts)
So ab hamko ye dikhana hai ki agar user logged in hai toh usko lgout ka image dikhaye, and more. Saari capabilities ke liye, as we are doing redux management so we need the dispatch.
  -> useDispatch()
  -> useNavigate()

  for checking if user is logged in :- 
  ->useSelector()

### My Earlier Homelayout page before using gemini 
```js
import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux'

function HomeLayout({ children }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //  For checking if user is logged in
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

    //  For displaying the options according to role
    const role = useSelector((state) => state?.auth?.role)

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle")
        element[0].checked = false;

        // changeWidth();
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = 0;
    }

    function handleLogout(e)
    {
        e.preventDefault();
        
        // res = await dispatch(logout())

        // if(res?.payload?.success)
        navigate("/")
    }

    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative ">
                        <FiMenu
                            onClick={changeWidth}
                            size={"32px"}
                            className='font-bold text-white m-4'
                        />
                    </label>
                </div>

                <div className="drawer-side w-0 ">
                    <label htmlFor='my-drawer' className='drawer-overlay'>
                    </label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative" >

                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>

                        </li>
                        <li>
                            <Link to={"/"}> Home </Link>
                        </li>

                        {isLoggedIn && role == 'ADMIN' && (
                            <li>
                                <Link to="/admin/dashboard">Admin Dashboard</Link>
                            </li>
                        )}
                        <li>
                            <Link to={"/courses"}> All Courses </Link>
                        </li>

                        <li>
                            <Link to={"/contact"}> Contect us </Link>
                        </li>

                        <li>
                            <Link to={"/about"}> About us </Link>
                        </li>

                        {!isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link to="/login"> Login </Link>
                                    </button>

                                    <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link to="/signup"> Sign up</Link>
                                    </button>
                                </div>
                            </li>
                        )}

                        {isLoggedIn && (
                            <li className="absolute buttom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link to="/user/profile"> Profile </Link>
                                    </button>

                                    <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link onClick={handleLogout}> Logout</Link>
                                    </button>
                                </div> 
                            </li>
                        )}

                    </ul>
                </div>
            </div>

            {children}

            <Footer />

        </div>
    )
}
export default HomeLayout; 
```

### Lecture 41 
```js
import HomeLayout from "../Layouts/HomeLayout";
import images from "../assets/Images/images.jpg"
import images1 from "../assets/Images/images1.jpg"
import images2 from "../assets/Images/images2.jpg"
import images4 from "../assets/Images/images4.jpg"


function AboutUs() {
    return (
        <HomeLayout>
            <div className="pl-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and Quality Education
                        </h1>
                        <p className="text-xl text-gray-200 " >
                            Our goal is to provide affordable and quality edcation to world.
                            We are providing for the aspiring and teachers and students to share
                            their knpwledge, skills, and crativity to each other.
                        </p>
                        <div className="w-1/2">
                            <img
                                id="test1"
                                style={{

                                    filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0 ));"
                                }}

                                className="drop-shadow-2xl"
                                src={images} alt="About Us Page"
                            />
                        </div>

                    </section>
                </div>

                <div className="carousel w-1/2 my-17 m-auto">

                    <div id="slide1" className="carousel-item relative w-full">
                        <div className= "flex flex-col items-center justify-center gap-5 px-[15%">
                            <img
                                alt="Tailwind CSS slide example"
                                src={images1}
                                className="w-40 rounded-full border-2 border-gray-300" />                            
                            <p className="text-xl text-gray-200">
                            " Education is the most powerful tool you can use to change the world."
                            </p> 
                            <h3 className="text-2xl font-semibold"> Famous personality 2nd :</h3>
                            <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                                alt="Tailwind CSS slide example"
                                src={images2}
                                className="w-40 rounded-full border-2 border-gray-300" />
                        <p className="text-xl text-gray-200">
                            " Education is the most powerful tool you can use to change the world."
                        </p> 
                        <h3 className="text-2xl font-semibold"> Famous personality 3rd :</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">
                       <img
                                alt="Tailwind CSS slide example"
                                src={images4}
                                className="w-40 rounded-full border-2 border-gray-300" />
                        <p className="text-xl text-gray-200">
                            " Education is the most powerful tool you can use to change the world."
                        </p> 
                        <h3 className="text-2xl font-semibold"> Famous personality 4th :</h3>
                        <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                                alt="Tailwind CSS slide example"
                                src={images2}
                                className="w-40 rounded-full border-2 border-gray-300" />
                        <p className="text-xl text-gray-200">
                            " Education is the most powerful tool you can use to change the world."
                        </p> 
                        <h3 className="text-2xl font-semibold"> Famous personality 1st :</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
        </HomeLayout>
    )

}
export default AboutUs;
```
While having the slides we are having the repeatation of the code which is neccessay to as we having some custom fumction as slides kidhar move hongi type of. So we can do a work that we made the slide component bana sakte hai and ek array of object bana sakte hai, us array of object mai ham name, quotes and slide ka no store kar sakte hai. slides ke nomber ko slides mai propagate or store kar sakte hai and jo bhi slide ka number hoga uske basis par privieous aur next slides ka bhi pata kar sakte hai. 

#### Creating components (CarouselSlide.jsx)
After creating the components we can do two things 
1. Ki ham ek karke 5 baar components ko render kare or type kare aur unki value ko daale 
2. ki hamko jo bhi value components mai daalni hai usko as array pahle la de aur components mai according daalte jaaye. (array of objects)
So we see that how we do the 2nd procedure :- 
```js
import CarouselSlide from "../Components/CarouselSlide";
import HomeLayout from "../Layouts/HomeLayout";
import images from "../assets/Images/images.jpg"
import images1 from "../assets/Images/images1.jpg"
import images2 from "../assets/Images/images2.jpg"
import images4 from "../assets/Images/images4.jpg"


function AboutUs() {

    const celebrities = [
        {
            title: "Famous personality 1st",
            description: "Education is the most powerful tool you can use to change the world.",
            image: images1,
            slideNumber: 1
        },
        {
            title: "Famous personality 2nd",
            description: "Education is the most powerful tool you can use to change the world.",
            image: images2,
            slideNumber: 2
        },
        {
            title: "Famous personality 3rd",
            description: "Education is the most powerful tool you can use to change the world.",
            image: images4,
            slideNumber: 3
        },
        {
            title: "Famous personality 4th",
            description: "Education is the most powerful tool you can use to change the world.",
            image: images2,
            slideNumber: 4
        },
    ]

    return (
        <HomeLayout>
            <div className="pl-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and Quality Education
                        </h1>
                        <p className="text-xl text-gray-200 " >
                            Our goal is to provide affordable and quality edcation to world.
                            We are providing for the aspiring and teachers and students to share
                            their knpwledge, skills, and crativity to each other.
                        </p>
                        <div className="w-1/2">
                            <img
                                id="test1"
                                style={{

                                    filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0 ));"
                                }}

                                className="drop-shadow-2xl"
                                src={images} alt="About Us Page"
                            />
                        </div>

                    </section>
                </div>

                <div className="carousel w-1/2 my-17 m-auto">
                    {celebrities && celebrities.map(celebrity => (<CarouselSlide
                        {...celebrity}
                        key={celebrity.slideNumber}
                        totalSlides={celebrities.length}
                    />))}
                    <CarouselSlide />

                </div>
            </div>
        </HomeLayout>
    )

}
export default AboutUs;
```

Dekho isme ham ek aur kaam kar sakte as ham apne array ko koi ek naya folder banakar waha sstore karle aur usko wapas about us page mai store kar le. So now we going to create a folder name constants waha ham Celebrities naam ka ek js file banayenge aur waha se wapas aboutus file mai wapas se store karenge. 

-> So pahle purra ka purra page bana lo then usko optimisez karlo. 

### Creating the not found page :- 
- Tailwind jab hamko koi bhi value compute karwayenge toh usko squre bracket mai denge like bg-[#344556]
- so agar aise url ko access ko access kar raha hai jpo hamare pass nahi hai then ham ye chahte hai usko not found page par then iske liye ham jaha route banaye hai waha par last mai ek aur route daal denge. 
- so ham ye chahte hai ki go back par click karne par ham jaha se is page par aaye the ham waha chale jaye for that we need a navigate 

### Creating a signup page
- so isme sabse pahle ham apne signup page ko route karenge then we try to implement the signup page on the signup page
- we want to add one functionalities to the signup page as ham apne user ko image upload karne ki
  - So we use the useState()
    - iske previewImage ke basis par ham apna code likh rahe honge. If exsit then kuchh kaam karenge and if not exist then kuchh kaam karenge. 
- dekho ye jo function hai handleUserInput() ye generalized function ke jaisa kkaam karta hai, as ye kisi bhi tarah ka input aur uske value handle karne ke capability rakhta hai. 
- now we need to work on the form validation and submitation 
  - stopping the html validation (how to stop html validation) , using noValidate
  - while doing the email validation we can google it email regex  javascript
- Account ko dispatch karne ke liye ek event/dispatch action banana padega  jisko deipatch kar paaye

-Creating async thunk in authSlice.js 
  - thunk: jab ham chahte hai ki koi bhi chiz thodi ruk ke baad mai kaam kare then is concept ko thunk kahte hai. 
- dedicated path hona zaruri hai, kyuki cross origin request sirf dedicated ip se allow karte hai, so here we go localhost5713/signup


### Adding the authentication flow : Login.jsx
- We are just doing some modification in the signup page to login page as they are having the more similarity. 
- So ab hamko login kare ke baad apne pages par changes dikhane hai jaise login ho chuka hai then logout ka option ho and more, so iske ham apne local storage ko update karenge in AuthSlice.jsx 
  - so thunk ke documentation mai jakar dekh sakte hai ki thank ke pass reducers hai jo ki promise ko return karta hai so jo export const login hai wo bhi ek tarah ka promise return karta hai, un reducers ke help se hamare promise ke different state ke uppar kya kya action karna hai wo likh sakte hai. 
  - login promise hai :- 
     - if login successful then what to do
     - if login failed then what to do
     - if login pending then hamko kya karna hai, we can define that
 - jo bhi asynchronous thunk wo ek tarah ka action he hai


### Logout Implementation :-
- logout ka ui likha hua hai HomeLayout mai so 
  - Waha ek handleLogout method hai, so ham yaha naha method dispatch karenge for tha we go to authSlice
- so agar logout successfull ho gaya then state ko update karna hoga-> builder.addcase(logout.fullfilled)
   - so yaha logout.fulfilled ke basis par ek reducer likh denge, jo localstorage ko clear kar dega,etc. 

### Making course list page :- 
-So pahle kisi bhi important page banane se pahle we need make their slice as api interaction yahi karte hai. and uske corresponding kya state hoga wo yahi karte hai, so CourseSlice.js
- After implementing the CourceSlice, reducers ko store mai implement kar denge. 
- Now setuping the api which would be the asyncthunk, jiske help se saare ke saare course lete aayenge. 

- Slice banane ke baad hamare, state mai jo bhi change usko bhi bhi update karna hoga using builder.additem (extraReducers)-> so changes ko yaha update karenge. 

Creating Course Pages
-so hamare pass course ke according multiple pages ho sakte hai So we create a folder Course, in this we have the all the pages regarding the course
-useEffect() : jo ki component ke first load par saare ke saare courseData ko actuallu load karne ke kosis karega
-Course cards bahut ho sakte hai, so hamko uska ek commponet banana chahiye phir usko yaha render karenge
- creating the route so we can able to see this page ki yaha kya ho raha hai 
- Coursecard mai kahi click karne par we need to navigate somewhere so lets create onclick() 

### Building contact us page 
- sabse pahle ham basic layout bana lenge layout page ke liye (so ui design karenge return() ke ander)
- UI likhne ke baad ab isko thoda usable banate hai, using some state (useState)
- so ham yaha dekh sakte hai ki hamko koi bhi state maintain karne ke zarurat nahi par rahi hai so toh hamko asyncthunk banane ki koi bhi zarurat nahi, so ham yahi par api manage kar sakte hai -> onFormSubmit()
- So ham login and signup dono jagah different valodation ko use kar rahe hai so chalo inka alag se ek Helper bana lete hai ->regexMatcher.js

### Building Denied page
- so ham saare page ko user ko access nahi karwayenge, so uske liye ek denied page banayenge. 

### Course Description page 
- so navigate() ek url ke sath sath ek state bhi leta hai jiske ander ham apna course ke ander jo bhi data aa raha hai usko pass kar denge 
  - so is state ke help se ham jo bhi state naviagte mai url ke corresponding agar koi component banate hai toh waha hamko saare data variable ka access hoga. (go to documentation react-router-dom naviagte state property)
  means that we can send the date from one page to another page using this. 
  - we jaha bhi hamko data variables ka value chahiye waha useLocation call karenge. (useLocation)
  - So hamare pass dusre page par data bhejne ke aur bhi tarike ho sakte the as :- 
    - querryParms ke through
    - Koi id bhej dete jaha data hai, us id ke help se ek aur network call lagate then ham data ko la paate
 - Yaha hamare pass data present hai means frontend mai hai, then yahi se data le lenge. 
 - doing some conditinal rendering, role ko fetchout karne ki kosis karenge. 

### Admin Require Auth 
- so abhi tak hamare pages ko saare users access kar paa rahe so ab ham yaha kuchh restriction karenge ki hamare kuchh pages ko sirf admin he access kar paaye. 
- so sabse pahle ham state mai se data laayenge so iske liye we need useSelector
- outlet component hamko react-router-dom se he milta hai, components ko access kar paa rahe honge jo us role ke liye hai and doing condional rendering there
- so agar ham chahte hai kuchh pages sirf admin ke liye then iske liye -> we create route and call our RequireAuth -> App.jsx

### creating Course Creation page
- We try to maintain some state here as hamko course ka description bharana hoga form mai. 
  - Form bhare ke baad ham ek network request karenge as we have the asyncthunk , so yaha ham admin se form ko fill karwayenge as usko course ki details bharna hoga like course title, description, etc just like made the state for the signup and login
- So agar course ka thumbnail lagana hai then image ko upload karna hoga then imageUploder ko use karenge as we use in signup page
- userInput se jo bhi data hamare pass aaya hai, usko dipatch karenge jo hamare pass state hai course ki waha, waha ham createCourse karne ki kosis karenge uske liye backend par request daalenge , request ek api hogi jisme saare ke saare data jo is form fill karenge waha jayega, backend par receive hoga waha saare vaildation hoga, then server create karega then response dega. 

### User Profile
- so sabse pahle hamko user ka purra data chahiye jo hamare pass already hai, user ki state mai. 
- Dekho hamare pass data string ke form mai aa raha hai then we need to convert this into string to js object, for this we have method JSON.parse()
  - Authslice mai ja kar ham apne data jo local storage mai hai usko JSON.parse mai bind kar denge


### EditProfile
- handleInputChange aur handleImageUpload function ham aur bhi pages mai likhte aaye hai, so ab ham form sumbmit ka method banana hoga as kyuki jab ham purra data collect kar lenge then we need to have an API call for that we need to make asyncThunk waha se ham profile ko updeta kar pa rahe honge. 
- se we have wriitten the toast, so hamne likh liya hai ki update profile hone par kya hona chahiyeand do not need to maintain the any state here so ab dispatch karenge or thunk ko render karenge apne onFormSubmit method so ki when clicking the submit the api fetch aur update or call an api. 
- so dispatch ho gaya means ki  ab profile update jayegi, So iske baad do chiz kar sakte hai :- 
  - ya toh dobarra user ka data fetch karke la sakte hai as hamne user ka data update kar diya hai
  - ya kisi aur page par redirect kardo waha se data fetch ho jayega but technically hamko ek baar pura data fetch karna hoga ya phir purri app ko ek baar refresh karna hoga kyuki kisi aur page par bhi data state sa aa raha hai aur state hamne kabhi update nahi ki hai -> so we are going write one more asyncThunk -> here we bring out the user data. 
   - so agar userData update hokar aa ja rahe hai then we need to update the state as new data of user has been come so we need to add new addCase
   - Note : thunk mai ham sair ek opject pass kar sakte , so agar jayda pass karna hai toh as array pass kar sakte hai

#### Mainly pages par yahi kaam ho raha hai, form ka kuchh data hota hai, data ko ham state se update karke laate hai, uske form ke handling ke kuchh fuction hota hai like image to image handler ka hota hai, normal value hai toh valuse ka kuchh function hota hai and then uska ek submission hota hai. Submission ke samay ek api request lagate hai for api we creare a asyncThunk., phir uske action ko dispatch karte hai, kyuki wo promise based action hota hai, wo future mai excute hota hai. execute hone ke baad wo hamko action object lakar deta hai. Is action object ke basis par ham kuchh reducers mai update karte hai. 

### Razorpay Slice :- 
- In this we will be discussing, if anu user want take subscription then wo payment kaise kar raha hoga. 
- So sabse pahle ek slice banayenge jisme payment se related jo bhi api hai, usko implement karenge. 
- so ab hamne razorpay slice bana liye hai, ab ham isko direct ui banate samay use kar lenge. 

### Checkout Page 
- so sabse pahle jo hamne Razorpay slice banaaya hai usko store mai mention karna hoga kyuki state management ki tracking aise he hota hai. 
- Sari needed contants/ attributes or property ko define karne ke baad, so ham useEffect ka use karnege, jaise he component pahli baar load ho raha hai, then us time par hamko kuchh data load karke lanna hai, jo bhi data lane uske liye async function likhenge load naam ka
  - us load method ko useEffect ke ander call kar rahe hai honge , aur load method mai do actiopn ko dispatch karenge
- Another async function likhenge handleSubscription naam ka 

- Checkout ka basic logic likh chuke then we need to write the UI part likte hai uske pahle ham window mai Razorpay() kaha se aaya we need use cdn of Razorpay -> go to index.html 

Dubugg :- So agar ham ek baar subscription le liya hai then us account par subscription start ho chuka hai, uske baad ham agar dobara subscription lene ki kosis karenge toh hamko problem face karna padega. Kyuki it is just a test environment(credential) hai production credential nahi toh hamko actual money daalne ki koi zarurat nahi hai, upi daalenge then hamko sidha bolega ki tumhara payment succesfull ho gaya hai, paisa nahi katega. 
- so if subscription already done then it redirect ti failed page. As subscription hai ham dobara se subscription nahi karna hai. 
  
- Revisiom of the today page :- 
  - So sabse pahle hamne RazoroaySlice mai jaha ham sabse pahle initial state store karte hai jaha udki different proprty usko like key,etc and aur bhi data store kar rahe honge for the dashboard perpose. 
  - Iske baad hamne thunk banaye like :- 
    - getRazorPayId naam ka jo hamko razorpaykey fetch karke lata hai backend se
    - purchaseCourseBundle naam ka ek jo ye subscriptionid ko fetch/poplate karke laata hai jo hamko chahiye hoga jab koi user subscription lega. to razorpay ka object ke intialization mai chahiye. 
    - ek verifyUserPayment , user ke payment karne ke baad ye verify karega ki payment successfull hua hai ki nahi
    -  similarly more thunk are designed. 

  - Aise jo thunk success ho hata hai toh unke response ko store kar rahe hote hai bundle.addCase method mai and inke result ke basis aalag conclusion banakar bhi answer store kar rahe hote hai. 

  - so hamko pata hai ki ract mai hamare pass ek he thml page hote hai, so wahi par js ke throgh ham saari chize kar rahe hote  hai, so we need the razorpay object kyuki razorpay ka jo pop up hai isi object ke through aata hai. For that we have to give the script tag to html page, ye cdn se purra page banakar de dega. 
  - So agar is object ko ham kuchh set up parameter denge, payment ka saara logic ye dekh leta hai, secure manner sab wo khud karega. Us object ki requirement ko bas fulfill karna hoga. 

  -Routes ko setup kiya jo bhi page ham bana rahe hai usko render karne ke liye. 

  - checkout page :- hamne kuchh variable banaye jo hamko razorpay ka kuchh details fetch karke laayenge. Aur ek paymentDetails naam ka ek object banaya jisko hamko razorpay ke object mai dena hai. 
  - handleSubscription :-  jab ham form ko submit karenge then ham uski default behavier ko avoid karenge, require ment chech karenge if present then tab aage badana hai nahi toh yahi se return ho jayenge. 
    - ek options object banate hai isko as parameter RazorPay object mai pass karte hai. So jab hamne cdn daala tha, toh hamare brawser ka window object hota hai waha RazorPay ka function present ho rha hai. 
    - isle .open() call kardo then uske :- 
       - options mai jitne bhi property ya attributes hai
       - isme hanler property dete hai jo, jab payment successful ho jayegi uske baad ye hander chalta hai, razorPay ka jo object hai wo isko execute karta hai. Payment hone ke baad hamko razorpay_payment_id , razorpay_signature , razorpay_subscription_id milta hai
       - phir backend se verify karnge ki payment hua hai ki nahi.  

### Payment cancellation :- 
- so isme sabse pahle ham ek CheckoutFailure page banayenge jisko , ham checkout successfull page ko copy karke layenge aur usko thoda modify karenge and we have create our checkoutFailure. 
- uske baad ham chahte hai ki cancel subsription ka buttom dikhaye  apne profile page -> so ab cance subscription ke buttom ko create karne par hona kya chahiye, ek thunk excute karnege cancelCourse bundle
- so hamko dispatch karna zaruri hai , success page par as hamko  useData chahihe hoga, ki cancel karne ke baad data mai kya changes aaye hai.

### Lecture state 
- so ab ham ek aur LectureSlice page bana rahe honge as jaha ham lectures ke baare mai thunks or state maintain karne ki kosis kar rahe honge. 
- getCourseLectures: ye thunk kisi bhi course ke liye saare lectures download karke laayega. 
- const response  = axiosInstance.delete(`/courses/${data.id}` , formData) hamko purra course delete naho karna hai. ek lecture karna hai, so ham as params delete() ke ander pass karenge. 

### Display lectures :- 
- so sabse pahle ham, karenge ki subscription buttom hamko n dikhe jab user subscription le chuka hai tab. 
- jab ham programmatically navigate kar rahe hote hai tab ham ek state object bhej rahe hote hai, 2nd option that ki hamare pass course ki id hoti or lectures ki id hoti then ham waha se access le rahe hote is tarike se network request jayda ho raha hota. 
- so ab deleting ki functionality , acche se kaam kar rahi hai delete karne par delete ho ja raha aur index bhi updeta ho ja rha hai like lecture 1 delete kar diye toh lecture 2 uski position le raha asie he sab kar rahe hai. so render aise ho rha hai ki lectures aa raha hai state se, state hai store mai and store mai dispatch karenge toh ye lectures update honge. 
- dekho yaha hamne apne div ko parenthesis () mai bind kiya tha lakin kuchh nahi hua lakin isko {} curley bracket bind kiya toh ho gaya why? sir say that ki hamko yaha compitation karna hai iske liye

### AddLecture page :- 
- so we are gathering the requirement or setuping , that could be required in this page like uploading video, etc features. 
- jaise ham photo ki processing karte the, jab signup photo upload karte the, us photo file ko toh ham api request mai bhejte he the, form se, usko imdeatily photo show karne ke liye ham, basic info url mai change karte the. Same kaam yaha bhi kar rahe honge -> handleVideoChange()
  - bahut saare tarike hote hai, video ko url mai change karne ke liye. 
  - video ko proper path dekar isliye nahi daal rahe hai kyuki us tarah se path fixed rahta hai, video ko url mai change karo aur access karo, 
  - cloudinary par ham ye decide kar sakte hai ki kitna bada lecture ham upload kar sakte hai.  

### Admin dashboard 
- so we are creating the StatSlice -> ye slice admin dashboard ke liye hai, uske statices ke liye. 
- chartjs jo ek object hai wo ek method lekar aata hai, register() jiske ander hamko ye batana padta hai ki ham kon kon sa chart lana chahte hai, jaha isko use kar rahe hai. like ArcElement, Tooltip, legend, CategoryScale, etc
- jo chart hamko banana hai uska structure banana hoga -> isko prepared karke rakhna hota hai. -> const userData
  - labels : kitne tarah ke data ko dikhna hai, 
  - label hai jo batayega ki kis tarah ka chart hai
  - backgroundColor :  jitna tarah ke data hai utane tarah ka color hoga data ko represnt karne ke liye
  - data :  actual data kya wo types ke, and so on property . 

  - so static object bana rahe hai, const userData, so agar aisa scenario hai jahha ham har ek 10 mim mai koi network request karte hai, aur hamara data change ho raha hai, so iske liye toh ham same kaam kar useState bana karte ->  see the docementation for this scenario. 

  - datasets mai agar ek se jayda object pass karte hai then ye pichart/or any graph bhi ke ander he wo object ka bhi data represent karega. 
