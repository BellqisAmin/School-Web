import React from 'react'

const TeacherAppAction = () => {
  return (
    <div className="w-full min-h-24 p-4 flex justify-center">
            <div className="w-[98%] rounded-3xl bg-background-light p-4 border-2 border-border grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-around lg:items-center gap-4">

                <div className="flex items-center justify-end gap-3 px-4 w-full lg:w-auto">
                    <div className="text-center w-full">
                        <h3 className=" font-bold text-sm md:text-base whitespace-nowrap">باهم برای آینده بهتر</h3>
                        <p className="text-blue-700/80 text-xs mt-1 whitespace-nowrap">همکاری خانواده و مکتب</p>
                    </div>
                    <div className="text-blue-800 flex-shrink-0">
                        <i>✔️</i>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 px-4 w-full lg:w-auto">
                    <div className="text-center w-full">
                        <h3 className="font-bold text-sm md:text-base whitespace-nowrap">معلمان مجرب</h3>
                        <p className="text-blue-700/80 text-xs mt-1 whitespace-nowrap">با تجربه و متخصص</p>
                    </div>
                    <div className="text-blue-800 flex-shrink-0">
                        <i>✔️</i>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 px-4 w-full lg:w-auto">
                    <div className="text-center w-full">
                        <h3 className="font-bold text-sm md:text-base whitespace-nowrap">کادر اداری حرفه ای</h3>
                        <p className="text-blue-700/80 text-xs mt-1 whitespace-nowrap">مدیریت و پشتیبانی متعهد</p>
                    </div>
                    <div className="text-blue-800 flex-shrink-0">
                        <i>✔️</i>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 px-4 w-full lg:w-auto lg:border-r lg:border-border">
                    <div className="text-center w-full">
                        <h3 className="font-bold text-sm md:text-base whitespace-nowrap">افتخارات مکتب</h3>
                        <p className="text-blue-700/80 text-xs mt-1 whitespace-nowrap">موفقیت های علمی و آموزشی</p>
                    </div>
                    <div className="text-blue-800 flex-shrink-0">
                        <i>✔️</i>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default TeacherAppAction
