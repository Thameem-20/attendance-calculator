const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', e => {
	e.preventDefault();
    var totalClasses=document.getElementById('classes').value;
	var attendedClasses = document.getElementById('attended').value;
    totalClasses =Number(totalClasses);
    attendedClasses =Number(attendedClasses);

	var attendancePercentage = (attendedClasses / totalClasses) * 100;
	if(attendancePercentage >100){
	  attendancePercentage="0";
 alert("class attended cannot be greater than total classes");
 
}
    document.getElementById('percentage').innerHTML=attendancePercentage +"%";

	var classesNeeded = Math.ceil((0.85 * totalClasses - attendedClasses) );
    if(classesNeeded<0){
        classesNeeded=0;
    }
    document.getElementById('result').innerHTML= classesNeeded;
    if(attendancePercentage < 85 && attendancePercentage>=80 ){
        document.getElementById('fine').innerHTML="100 ";
    }else if (attendancePercentage <80 && attendancePercentage >=75 ) {
        document.getElementById('fine').innerHTML="500";
    } else if(attendancePercentage <75 && attendancePercentage>=70) {
        document.getElementById('fine').innerHTML="1000";
        
    }else if(attendancePercentage <70) {
        document.getElementById('fine').innerHTML=" above 1000";
    }
});

function popup(){
    document.getElementById('popup').style.display="block";
}
function hidde(){
    document.getElementById('popup').style.display="none";
}
