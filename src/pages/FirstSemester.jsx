import React from 'react'
import ProgressCard from '../components/ProgressCard'
import Exam from '../components/Exam';
const FirstSemester = () => {

    const title = "Class 1";
    const current = 608764;
    const total = 898567;
    const percentage = Math.round((current / total) * 100);
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
        <div className='bg-[#F2F2F2] min-h-screen w-full px-36 py-10'>
            <div className='bg-white px-16 py-8 mb-8 flex items-center justify-between'>
                <div>
                    <p className='text-[20px] text-[#4A4A4A]'>Total exam fee collected</p>
                </div>

                <div >
                    <div className='text-[32px] mb-[16px]'>
                        {current.toLocaleString("en-in")}
                        <span className='text-[#AFAFAF]'> /{total.toLocaleString("en-in")}</span>
                    </div>
                    <div >
                        <div className='flex items-center gap-4'>
                            <div className='flex-1 h-[10px] rounded-full bg-[#F2F2F2]'>
                                <div className='h-full rounded-full bg-[#00A606]'
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                            <span className='text-[12px] text-[#AFAFAF]'>{percentage}% completed</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[20px]'>
                {[...Array(5)].map((_, i) => (
                    <div key={i} className='flex-1'>
                        <ProgressCard
                            title={title}
                            current={current}
                            total={total}
                            percentage={percentage}
                        />
                    </div>
                ))}
            </div>
            <div className='mt-8'>
                <Exam whichClass="Class 1" schedule={schedule} />
                <Exam whichClass="Class 2" schedule={schedule}/>
                <Exam whichClass="Class 3" schedule={schedule}/>
            </div>
        </div>
    )
}

export default FirstSemester