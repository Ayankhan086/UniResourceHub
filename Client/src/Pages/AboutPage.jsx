import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AboutPage = () => {
    return (
        <>
            <Navbar /> 
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
                {/* Hero Section */}
                <section className="py-20 px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Revolutionizing <span className="text-blue-600">Academic</span> Resource Sharing
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            UniResource Hub was born from a simple idea: what if every student could access
                            the collective knowledge of their entire university?
                        </p>
                        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
                        <p className="text-lg text-gray-600 mb-6 text-center">
                            Founded in 2025 by a group of frustrated students tired of scrambling for study materials.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 text-center">
                            What started as a simple file-sharing solution between classmates has evolved into a comprehensive academic ecosystem.
                        </p>
                        <div className="flex justify-center mt-8">
                            <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-xl px-8 py-6 shadow-inner max-w-xl">
                                <p className="text-indigo-700 text-lg font-semibold text-center">
                                    “We believe every student deserves access to quality resources, no matter where they are.”
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 px-4 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
                        <p className="text-xl mb-12">
                            To democratize academic resources and create a collaborative learning environment
                            where every student has equal opportunity to succeed.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: '🌐', title: 'Accessibility', text: 'Breaking down information barriers' },
                                { icon: '🤝', title: 'Community', text: 'Powered by student contributions' },
                                { icon: '🚀', title: 'Innovation', text: 'Constantly evolving platform' }
                            ].map((item, index) => (
                                <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                                    <p className='text-black'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>




                {/* CTA Section */}
                <section className="py-20 px-4 bg-gray-50">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Join the Revolution?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Be part of a growing community transforming how students learn and share knowledge.
                        </p>
                        <NavLink to="/signup">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
                                Get Started Now
                            </button>
                        </NavLink>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;










{/* Stats Section */ }
{/* <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">By The Numbers</h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '50K+', label: 'Active Students' },
                            { number: '120K+', label: 'Resources Shared' },
                            { number: '85%', label: 'Report Better Grades' },
                            { number: '24/7', label: 'Accessibility' }
                        ].map((stat, index) => (
                            <div key={index} className="p-6">
                                <p className="text-5xl font-bold text-blue-600 mb-3">{stat.number}</p>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}