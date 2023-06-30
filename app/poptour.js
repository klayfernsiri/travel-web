export default function Poptour(){
    return(
        <div className="flex flex-col items-center space-y-5">
            <div className="text-xl font-bold transition">POPULAR TOURS</div>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="flex items-center space-x-4">
                <img src="../finland1.jpg" alt="finland1" className="border w-48 h-80 rounded object-cover" />
                <img src="../paris1.jpg" alt="paris1" className="border w-48 h-80 rounded object-cover" />
                <img src="../japan3.jpg" alt="japan2" className="border w-48 h-80 rounded object-cover" />
                <img src="../singapore2.jpg" alt="singapore" className="border w-48 h-80 rounded object-cover" />
                </div>
                
               
               
               
                {/* <img src="../paris.jpg" alt="Tour2" />
                <img src="../japan.jpg" alt="Tour3" />
                <img src="../finland.jpg" alt="Tour4" /> */}
            </div>
    )
}