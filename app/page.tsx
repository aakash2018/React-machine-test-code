import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1 className="text-center font-mono text-2xl text-red-500 p-2">List of machine code test</h1>
      <div className="flex justify-evenly">
        <ul className="text-xs mx-2 border-2 border-black mt-4 bg-emerald-400 w-1/4 p-2 rounded-none shadow-lg font-mono">
          <li className='hover:text-yellow-800 visited:text-white-600'><Link href="/toaster">Toaster</Link></li>
          <li className='hover:text-yellow-800 visited:text-white-600'>
            <Link href="/rating">
              React star Rating
            </Link>
          </li>
          <li>Pagination</li>
          <li>OtP</li>
          <li>Carousel</li>
          <li>Search Bar</li>
          <li>Infinite scroll</li>
          <li>Progress Bar</li>
          <li className='hover:text-yellow-800 visited:text-white-600'>
            <Link href="/accordian">
              Accordian
            </Link>
          </li>
          <li>stopWatch</li>
          <li>File Explorer</li>
          <li>Multi Step Form</li>
        </ul>
        <ul className="text-xs  mx-2 border-2 border-black mt-4 bg-yellow-400 w-1/4  p-2 rounded-none shadow-lg font-mono">
          <li>React Calendar</li>
          <li>Faq</li>
          <li>Drag and drop</li>
          <li>React Modal</li>
          <li>Crypto Converter</li>
          <li>Indeterminate checkbox</li>
          <li>Typing Effect</li>
          <li>React File uploader usingDrag and drop</li>
          <li>Whack-a-Mole</li>
          <li>Employee database management</li>
          <li>Cinemal Hall tickets</li>
          <li>Center Div using flex and vh heiht</li>
        </ul>
        <ul className="text-xs  mx-2 border-2 border-black mt-4 bg-red-400 w-1/4  p-2 rounded-none shadow-lg font-mono">
          <li>Tic Tac Toe</li>
          <li>Snake game</li>
          <li>Todo list</li>
          <li>Virtaulaized list</li>
          <li>React stepper</li>
          <li>React tab</li>
          <li>Editable tab</li>
          <li>Memory game</li>
          <li>Nested Component</li>
          <li>File Explorer</li>
          <li>Traffic Lights</li>
          <li>Like Button</li>
        </ul>
        <ul className="text-xs mx-2 border-2 border-black mt-4 bg-blue-400 w-1/4  p-2 rounded-none shadow-lg font-mono">
          <li>Countdown timer</li>
          <li>Image slider</li>
          <li>Color picker</li>
          <li>Weather app</li>
          <li>Expense tracker</li>
          <li>Recipe app</li>
          <li>Markdown previewer</li>
          <li>Budget planner</li>
          <li>Habit tracker</li>
          <li>Movie search app</li>
          <li>Language translator</li>
          <li>Blog nested Comments</li>
        </ul>
      </div>
      <div className="flex justify-evenly">
        <ul className="text-xs mx-2 border-2 border-black mt-2 bg-lime-400 w-1/4  p-2 rounded-none shadow-lg font-mono">
          <li>Quiz app</li>
          <li>Recipe finder</li>
          <li>Music player</li>
          <li>Book tracker</li>
          <li>Fitness tracker</li>
          <li>Photo gallery</li>
          <li>News aggregator</li>
          <li>Job board</li>
          <li>Event planner</li>
          <li>Social media dashboard</li>
          <li>Travel itinerary planner</li>
          <li>Poll Widgets</li>
          <li>Div color</li>
        </ul>
        <ul className="text-xs mx-2 border-2 border-black mt-2 bg-pink-400 w-1/4  p-2 rounded-none shadow-lg font-mono">
          <li>Language learning app</li>
          <li>Virtual bookshelf</li>
          <li>Podcast player</li>
          <li>Meal planner</li>
          <li>Grocery list app</li>
          <li>Interior design planner</li>
          <li>Wedding planner</li>
          <li>Baby name generator</li>
          <li>Gift idea generator</li>
          <li>Daily journal app</li>
          <li>Mindfulness app</li>
          <li>Auto Suggestion input</li>
          <li>Job Board</li>
        </ul>
        <ul className="text-xs  mx-2 border-2 border-black mt-2 bg-purple-400 w-1/4  p-2 rounded-none shadow-lg font-mono">
          <li>Sleep tracker</li>
          <li>Water intake tracker</li>
          <li>Calorie counter</li>
          <li>Step counter</li>
          <li>Body measurement tracker</li>
          <li>Period tracker</li>
          <li>Medication reminder</li>
          <li>Doctor appointment scheduler</li>
          <li>Health symptom checker</li>
          <li>First aid guide</li>
          <li>Emergency contact app</li>
          <li>Stepper</li>
          <li>Dark and light mode</li>
        </ul>
        <ul className="text-xs mx-2 border-2 border-black mt-2 bg-cyan-400 w-1/4  p-2 rounded-none shadow-lg font-mono">
          <li>Car maintenance tracker</li>
          <li>Fuel efficiency tracker</li>
          <li>Trip planner</li>
          <li>Parking spot finder</li>
          <li>Public transit app</li>
          <li>Traffic tracker</li>
          <li>Roadside assistance app</li>
          <li>Carpooling app</li>
          <li>Electric vehicle charger finder</li>
          <li>Vehicle expense tracker</li>
          <li>Car wash locator</li>
          <li>Multi Select Search</li>
          <li>Breadcrumb</li>
        </ul>
      </div>
    </div>
  );
}
