const calculateformEl = document.getElementById("calculateForm")
const resultEl = document.getElementById("result");


const calculateMarks = (event) => {
    const maxMarks = 400;
    event.preventDefault();


    const formData = new FormData(calculateFormEl);

    const data = {};

    formDarta.forEach((value, key) => {
        data[key] = +value;
    });

    const totalMarks = data.maths + data.science + data.hindi + data.english;
    const percentage = math.round ((totalMarks / maxMarks) * 100);
   
   
    resultEl.innerText = 'you have got ${totalMark} mark out of ${maxMark} and your percentage is ${percentage}%'
   
};