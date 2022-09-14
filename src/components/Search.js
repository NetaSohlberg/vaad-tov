
import "./Search.css";

function Search(){

    const Parashot=["בראשית","שמות","ויקרא"]
    const years=["תש\"ע","תשע\"א"]
    

    return(
        <div className="search">
            <a className="searchTitle">פרשה</a>
            <select class="mdb-select md-form" searchable="Search here..">
    <option value="" disabled selected>בחר פרשה</option>
    {
        Parashot.map(Parasha => (
            <option>{Parasha}</option>
        ))
    }
  </select>
            <a className="searchTitle">שנה</a>
            <select class="mdb-select md-form" searchable="Search here..">
    <option value="" disabled selected>בחר שנה</option>
    {
        years.map(Parasha => (
            <option>{Parasha}</option>
        ))
    }
  </select>
  <div></div>
            <div className="searchTitle">חיפוש חופשי</div>
            <div class="sc-src-offset">
	<div class="sc-src-box">
		
		<button class="sc-src-icon-a">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
			</svg>
		</button>
		
		<input type="text" class="sc-src-bar" placeholder="חפש כאן"/>
		
		<button class="sc-src-icon-d">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="currentColor" d="M17.25 7.8L16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"></path>
			</svg>
		</button>
	</div>
</div>

{/* <script async src="https://cse.google.com/cse.js?cx=554ac463865644928">
</script>
<div class="gcse-search">google search</div> */}

<head>
        <title>Custom Search-Bar</title>
        {/* <style>
            body {
                
                background-image: linear-gradient(to left, white, green);
                color: lawngreen;
            }
        </style> */}
    </head>
    <body>
        <h1 >GeeksforGeeks</h1>
        <script async src=
"https://cse.google.com/cse.js?cx=007019498718139788174:amtiepdpgeg">
        </script>
        <div class="gcse-search"></div>
    </body>

        </div>

    );
}

export default Search;