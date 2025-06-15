import React, { useState } from 'react'
import download_img from "./../assets/download.png"
import upload_img from "./../assets/upload.png"
import edit_img from "./../assets/edit.png"
import down_img from "./../assets/down.png"
const Exam = ({ whichClass,schedule }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div onClick={() => setIsOpen(!isOpen)} className="w-full py-4">
            <div className="flex justify-between items-center">
                <h2 className="text-[18px] font-bold text-[#131313]">{whichClass}</h2>
                <div className="text-[#131313]">
                    <img src={down_img} />
                </div>
            </div>
            <div className='h-[2px] bg-[#AFAFAF] mt-1 mb-4'></div>
            {isOpen && (
                <>
                    <div className='flex justify-between my-2'>
                        <p className="text-[#131313] text-[14px]">schedule</p>
                        <div className='flex gap-8'>
                            <button className="text-blue-500 text-[14px] flex items-center gap-2"> <img src={download_img} alt="" />Download Schedule</button>
                            <button className="text-blue-500 text-[14px] flex items-center gap-2"> <img src={edit_img} alt="" />Edit Schedule</button>
                        </div>
                    </div>
                    <table className="w-full border-collapse border border-[#AFAFAF]">
                        <thead>
                            <tr className="bg-[#F2F2F2]">
                                <th className="py-2 text-left text-[#131313] pl-8">Subjects</th>
                                <th className="py-2 text-left text-[#131313]  ">Exam date</th>
                                <th className="py-2 text-left text-[#131313]  ">Full marks</th>
                                <th className="py-2 text-left text-[#131313]  ">Pass marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.subjects.map((subject, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'}>
                                    <td className="py-2 text-left text-[#131313] pl-8">{subject.name}</td>
                                    <td className="py-2 text-left text-[#131313]">{subject.date}</td>
                                    <td className="py-2 text-left text-[#131313]">{subject.fullMarks}</td>
                                    <td className="py-2 text-left text-[#131313]">{subject.passMarks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='flex justify-between mt-12'>
                        <p className="text-[#131313] text-[14px]">Mark sheet</p>
                        <div className='flex gap-8'>
                            <button className="text-blue-500 text-[14px] flex items-center gap-2"> <img src={download_img} alt="" />Download Template</button>
                            <button className="text-blue-500 text-[14px] flex items-center gap-2"> <img src={upload_img} alt="" />Upload data</button>
                        </div>
                    </div>
                    <table className="w-full border-collapse mt-2 border border-[#AFAFAF]">
                        <thead>
                            <tr className="bg-[#F2F2F2]">
                                <th className="py-2 text-left text-[#131313]  pl-8">Roll</th>
                                <th className="py-2 text-left text-[#131313]  ">Student name</th>
                                <th className="py-2 text-left text-[#131313]  ">Quran majid</th>
                                <th className="py-2 text-left text-[#131313]  ">Islam</th>
                                <th className="py-2 text-left text-[#131313]  ">English 1st</th>
                                <th className="py-2 text-left text-[#131313]  ">Bangla</th>
                                <th className="py-2 text-left text-[#131313]  ">Mathematics</th>
                                <th className="py-2 text-left text-[#131313]  ">G. Knowledge</th>
                                <th className="py-2 text-left text-[#131313]  ">Average</th>
                                <th className="py-2 text-left text-[#131313]  ">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.students.map((student, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'}>
                                    <td className="py-2 text-left text-[#131313] pl-8">{student.roll}</td>
                                    <td className="py-2 text-left text-[#131313] ">{student.name}</td>
                                    <td className="py-2 text-left text-[#131313]">{student.marks.quran}</td>
                                    <td className="py-2 text-left text-[#131313]">{student.marks.islam}</td>
                                    <td className="py-2 text-left text-[#131313]">{student.marks.english}</td>
                                    <td className="py-2 text-left text-[#131313]">{student.marks.bangla}</td>
                                    <td className="py-2 text-left text-[#131313]">{student.marks.math}</td>
                                    <td className="py-2 text-left text-[#131313]">{student.marks.gk}</td>
                                    <td className="py-2 text-left text-[#131313]">0</td>
                                    <td className="py-2 text-left text-[#131313]">0</td>
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