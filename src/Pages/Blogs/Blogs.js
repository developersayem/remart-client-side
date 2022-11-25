import { Accordion } from 'flowbite-react';
import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div className='w-3/4 mx-auto my-16'>
                <Accordion alwaysOpen={true}>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What are the different ways to manage a state in a React application?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400 text-start">
                                Managing state in your React apps isn’t as simple as using useState or useReducer.

                                Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                                In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                                There are four main types of state you need to properly manage in your React apps:
                                <ol type="i">
                                    <li>i.<span>Local (UI) state – Local state is data we manage in one or another component.</span></li>
                                    <li>ii.<span>Global (UI) state – Global state is data we manage across multiple components.</span></li>
                                    <li>iii.<span>Server state – Data that comes from an external server that must be integrated with our UI state.</span></li>
                                    <li>iv.<span>URL state – Data that exists on our URLs, including the pathname and query parameters.</span></li>
                                </ol>
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            How does prototypical inheritance work?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What is a unit test? Why should we write unit tests?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Testing software is as important as developing it, since, testing helps find out whether the software meets the actual requirements or not. A thoroughly tested software product ensures dependability, security, and high performance, which leads to time-saving, customer satisfaction, and cost-effectiveness.

                                ReactJS is a popular JavaScript library that is used for building highly rich user interfaces. Its popularity can be gauged from the significant increase in the number of downloads over the years as seen below.


                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            React vs. Angular vs. Vue?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;