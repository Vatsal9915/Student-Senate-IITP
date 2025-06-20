import React from 'react'

const FaQ = () => {
  return (
    <div>
        <section className="py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg lg:text-xl text-gray-600">Quick answers to common inquiries</p>
            </div>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-2 border-gray-200 ">
                <h3 className="text-xl font-semibold mb-2">How can I join the Student Technical Council?</h3>
                <p className="text-gray-500">Students can join through our participation model starting with event participation, open calls, and
volunteer opportunities. Visit our Participation page to learn about the growth pathway.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h3 className="text-xl font-semibold mb-2">Which wing should I choose - DISHA, ARTHNITI, or TATVA?</h3>
                <p className="text-gray-500">Choose based on your interests: DISHA for career development, ARTHNITI for entrepreneurship, or
TATVA for technology. You can also participate in multiple wings based on your interests and
availability.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-gray-200 ">
                <h3 className="text-xl font-semibold mb-2">How can companies collaborate with Student Technical Council?</h3>
                <p className="text-gray-500">
                    Companies can partner with us for recruitment, workshops, mentorship programs, and sponsorships.
Contact our industry relations team at industry@iitp.ac.in for collaboration opportunities.
                </p>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-gray-200 ">
                <h3 className="text-xl font-semibold mb-2">What is the time commitment for participation?</h3>
                <p className="text-gray-500">Time commitment varies by role and level. Entry-level participation requires 2-4 hours per week, while
leadership positions may require 8-12 hours per week. We value consistency over intensity.</p>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default FaQ