import react from 'react';
import ReactDom from'react-dom';

const name="huzaifah";
var add=2+3;
ReactDom.render(
<>
<h1>Write Your Name</h1>
<p1>My Name Is {name}</p1>
<div>
<p2>Calculation is{add}</p2>
</div>
</>,
document.getElementById('root')
);
/*agr jsx main mtlb html k code main js ko use kra hai tu {} in brackets ka use kra hoga
or is main isrf exprassion use kr skte statement nh jese k if else*/