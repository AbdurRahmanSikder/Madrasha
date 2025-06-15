import React, { useState } from 'react'
import download_img from "./../assets/download.png"
import upload_img from "./../assets/upload.png"
import edit_img from "./../assets/edit.png"
import down_img from "./../assets/down.png"
const Exam = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const schedule = {
        subjects: [
            { name: 'Banglia', date: '22/Apr/2025 - Saturday', fullMarks: 100, passMarks: 33 },
            { name: 'English', date: 'dd/mm/yyyy - Day', fullMarks: 100, passMarks: 33 },
            { name: 'Mathematics', date: 'dd/mm/yyyy - Day', fullMarks: 100, passMarks: 33 },
            { name: 'Arabic', date: 'dd/mm/yyyy - Day', fullMarks: 100, passMarks: 33 },
        ],
        students: [
            { roll: 1, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
            { roll: 2, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
            { roll: 3, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
            { roll: 4, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
            { roll: 5, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
            { roll: 6, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
            { roll: 7, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
            { roll: 8, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
            { roll: 9, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
            { roll: 10, name: 'Wade Warren', marks: { quran: 0, islam: 0, english: 0, bangla: 0, math: 0, gk: 0 } },
        ],
    };

    return (

        <div onClick={() => setIsOpen(!isOpen)} className="w-full py-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-black">{text}</h2>
                <div className="text-black">
                    <img src={down_img} />
                </div>
            </div>
            <div className='h-[2px] bg-[#AFAFAF] mt-1 mb-4'></div>
            {isOpen && (
                <>
                    <div className='flex justify-between my-2'>
                        <p className="text-black text-[14px]">schedule</p>
                        <div className='flex gap-8'>
                            <button className="text-blue-500 text-[14px] flex items-center gap-2"> <img src={download_img} alt="" />Download Schedule</button>
                            <button className="text-blue-500 text-[14px] flex items-center gap-2"> <img src={edit_img} alt="" />Edit Schedule</button>
                        </div>
                    </div>
                    <table className="w-full border-collapse border border-[#AFAFAF]">
                        <thead>
                            <tr className="bg-[#F2F2F2]">
                                <th className="py-2 text-left text-black pl-8">Subjects</th>
                                <th className="py-2 text-left text-black  ">Exam date</th>
                                <th className="py-2 text-left text-black  ">Full marks</th>
                                <th className="py-2 text-left text-black  ">Pass marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.subjects.map((subject, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'}>
                                    <td className="py-2 text-left text-black pl-8">{subject.name}</td>
                                    <td className="py-2 text-left text-black">{subject.date}</td>
                                    <td className="py-2 text-left text-black">{subject.fullMarks}</td>
                                    <td className="py-2 text-left text-black">{subject.passMarks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='flex justify-between mt-12'>
                        <p className="text-black text-[14px]">Mark sheet</p>
                        <div className='flex gap-8'>
                            <button className="text-blue-500 text-[14px] flex items-center gap-2"> <img src={download_img} alt="" />Download Template</button>
                            <button className="text-blue-500 text-[14px] flex items-center gap-2"> <img src={upload_img} alt="" />Upload data</button>
                        </div>
                    </div>
                    <table className="w-full border-collapse mt-2 border border-[#AFAFAF]">
                        <thead>
                            <tr className="bg-[#F2F2F2]">
                                <th className="py-2 text-left text-black  pl-8">Roll</th>
                                <th className="py-2 text-left text-black  ">Student name</th>
                                <th className="py-2 text-left text-black  ">Quran majid</th>
                                <th className="py-2 text-left text-black  ">Islam</th>
                                <th className="py-2 text-left text-black  ">English 1st</th>
                                <th className="py-2 text-left text-black  ">Bangla</th>
                                <th className="py-2 text-left text-black  ">Mathematics</th>
                                <th className="py-2 text-left text-black  ">G. Knowledge</th>
                                <th className="py-2 text-left text-black  ">Average</th>
                                <th className="py-2 text-left text-black  ">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.students.map((student, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'}>
                                    <td className="py-2 text-left text-black pl-8">{student.roll}</td>
                                    <td className="py-2 text-left text-black ">{student.name}</td>
                                    <td className="py-2 text-left text-black">{student.marks.quran}</td>
                                    <td className="py-2 text-left text-black">{student.marks.islam}</td>
                                    <td className="py-2 text-left text-black">{student.marks.english}</td>
                                    <td className="py-2 text-left text-black">{student.marks.bangla}</td>
                                    <td className="py-2 text-left text-black">{student.marks.math}</td>
                                    <td className="py-2 text-left text-black">{student.marks.gk}</td>
                                    <td className="py-2 text-left text-black">0</td>
                                    <td className="py-2 text-left text-black">0</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Exam