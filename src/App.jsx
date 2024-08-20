import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-200 text-black p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold"></div>
        {/* Desktop Menu */}
        <ul className="hidden font-bold md:flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              Works
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 right-0 w-48 bg-gray-800 text-white ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-2 p-4">
            <li>
              <a href="#" className="block hover:text-gray-400">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="flex flex-col-reverse p-3 md:px-5 max-w-[1440px] mx-auto md:flex-row text-black font-semibold w-full">
      <div className="flex flex-col text-center md:text-left justify-center items-center md:items-start gap-4 md:w-1/2 h-[75vh]">
        <h1 className="text-3xl md:text-6xl font-bold ">Hi, I am John,</h1>
        <h1 className="text-3xl md:text-6xl font-bold ">Creative Technologist</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <button className="bg-[#FF6464] w-[208px] h-[47px] px-2 py-1 rounded text-white ">Download Resume</button>
      </div>
      <div className="flex mt-4 justify-center  items-center w-full md:w-1/2">
        <img className="rounded-full w-[345px] h-[345px]  object-cover  " src="https://s3-alpha-sig.figma.com/img/c316/adc4/65a80990af3a0075303343f0d615c92a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IXvnRdZwTeHOjoL-5osCcSQw-c0Y8q9Q6XtO25SAt1rrTzl4yzdBs81cf0my3JxF4XJlKIKEXKeY7VJHp4s9xsMIE6NtH1tPebUQIUFFabzRcUx5wHsc3U6OGJ6tCfNSSqQcfOE4dz3wZLL9yt~C8QNL~2InG0~r12uppYomqdVWomSxLrHNBPMDqmuzQ85b3~So5BmOZDZ6IsNu-hNhO01ntb-YHtiWl4~jn64fMv8lN62iORaQwKq383KEJ~HW-K59rs7J-6GyZSXUAiTrX4TUkSAiFRu3pDgFKBN3EXnltU9GLxAMpTh0K906giTkXhf~yM0TBeRwQ7nCyLs23g__" alt="" />
      </div>
    </div>
  );
}
function Posts() {
  return (
    <div className="px-3 mx-auto md:px-5 max-w-[1440px] py-3 flex flex-col gap-4 bg-[#EDF7FA] ">
      <div className="flex w-full justify-between ">
        <h1 className="text-2xl">Recent posts</h1>
        <p className="text-blue-600">View all</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="bg-white p-4 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Making a design system from scratch</h1>
          <p>12 Feb 2020 | Design, Pattern</p>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className=" bg-white p-4 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Making a design system from scratch</h1>
          <p>12 Feb 2020 | Design, Pattern</p>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
    </div>
  )
}
function Works() {
  return (
    <div className="px-3 mx-auto md:px-5 max-w-[1440px] py-3 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Featured works</h1>
      <div className="flex flex-col md:flex-row justify-center  gap-3">
       <div className="w-full md:w-1/2">
         <img src="https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jwhOgNOVt9PgsABMlm5Vv8Y5e8J8KqAK7hK--KwMQq9SHuGT3iyhoNntNF7HytxeUquYK8n1fNfYnoC7AKhuJ6jwBqRm5rTXp8vb3X77ee40hPpVvxuj8dQrIFZnG0O5kBgETVPaLEvQ-UWLYaYvSgmrjM-YX16FIGc5dHdlpfuvRxDaEYh1z-TnmcQ-BgWhyBVEl2KqkI7XL7sCnIvV5OGW8IRu20lQTtLq4tsbtCXF--t0nJGIhQN7Jvq0wY7Nc75rndD5mKh7wmCmVdNZHdgXTPDKnGdsLodXrrnG9gSw1v1r3u3JLWA~HnUnWXFTAE0suTwg6VoEmyQJMdswpw__" alt="" />
         </div>
       <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Designing Dashboards</h1>
        <p className="flex gap-4 text-xl items-center"><span className="text-base px-2 bg-black rounded-full text-white">2020</span> Dashboard</p>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
       </div>
      </div>
      <div className="hidden md:flex flex-col md:flex-row justify-center  gap-3">
       <div className="w-full md:w-1/2"> 
         <img src="https://s3-alpha-sig.figma.com/img/44dc/7799/6f359e2db24fc4e08bfd61cf50427139?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mTPl0-l1bvfarTL1Rv7SRL6x9AJ8b2qlaf5PN656pY1s-YWX1o0yORJ23hOXE~SV4SLvYX84qv5P1iVG~fE19UiY3NeBsp3ByUPVNLXPyqeD0rS6rtI9NkKxOE4EoxJqGDMypnt4h5ac4gSqfUoyDAjgP-eHCZkw6pUYthu8n~qV4lDjx1J06PDPNkBnsFdwEQSlsMfgrNKw4jJ-GTwQe5mymokWdzvlDtfVAVlvZYuMiqC58bSeV-J5vfmaWwlZON1xH-6gwVHRSJtMXA1oRT0CzYpkR1t3eJ6JdiJGgdX9h6iWmpeMSj53Bph05Xa-qG7TGe7TVoWUVkFj6tqzWw__" alt="" />
         </div>
       <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Vibrant Portraits of 2020</h1>
        <p className="flex gap-4 text-xl items-center"><span className="text-base px-2 bg-black rounded-full text-white">2018</span> Illustration</p>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
       </div>
      </div>
      <div className="hidden md:flex flex-col md:flex-row justify-center  gap-3">
       <div className="w-full md:w-1/2">
         <img src="https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZWxUK9y~QBr~HDYEUvsMkQGkflCh3ZZCjXQiLsWkZrdUv4Stv5l86n8yTH~sO~Y0ikmZBLKiS2eYkVbmEFgsZ7FzPtFeIlsJ9jqnBM554J-Wg-t7Yl2oou6DEv9a9Nl7PWgBEdMj8yoAkYxSL46uBgNUJ1lGsvwx79yGAbae5Kwm4GczmrLYvfEH0QmOfhbNac4H4E7zNAwV6imf2ZMQIW9lH9zXqAl-q~LsBNqqdgVozcm4thCVtH0stoeOmOjv3HBlI5rpRzzEmTDoJO5OBf2dwq~T7sb2xMWodB-nOwkg5o0Xdpf5~72UBDQSUsi5-iQ8tR-PeKgHFmN5tMzXrw__" alt="" />
         </div>
       <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">36 Days of Malayalam type</h1>
        <p className="flex gap-4 text-xl items-center"><span className="text-base px-2 bg-black rounded-full text-white">2018</span> Typography</p>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
       </div>
      </div>
    </div>
  )
}
function Fotter() {
  return (
    <div className="p-4 text-[#21243D]">
      <div className=" justify-center text-5xl flex gap-3">
      <i className="fa-brands fa-square-facebook"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-linkedin"></i>
      </div>
      <div className="mt-4 text-center">
<p>Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero/>
      <Posts/>
      <Works/>
      <Fotter/>
      <div className="p-4"></div>
    </>
  );
}

export default App;
