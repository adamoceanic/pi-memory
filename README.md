| Branch | CI | Coverage | Website | Development |
|---|---|---|---|---|
| master | [![Build Status](https://travis-ci.org/ajze/pi-memory.png)](https://travis-ci.org/ajze/pi-memory) | [![Coverage Status](https://coveralls.io/repos/github/ajze/pi-memory/badge.svg?branch=master&service=github)](https://coveralls.io/github/ajze/pi-memory?branch=master) | [pi.ajze.co.uk](http://pi.ajze.co.uk) | [work.jonze.uk](https://work.jonze.uk) |

# pi-memory
A web-based application helping users to memorise the digits of Pi, and potentially other well known number lists (primes, mersenne primes, Lucas, etc)

I had planned to make this simply for myself but realised that it could useful and engaging for other people too. Alongside simply providing an application to practice recalling the digits, I want to treat this as a bit of practice in the creation of and deploying a well-structured service utilising a number of different Amazon Web Services tools. I have no experience using CI with anything other than C/C++ so I would like to take the opportunity to experiment with that also.

## Planned Features
I have little doubt that an application like this likely exists already somewhere online. I have deliberatly not gone looking for it simply because I don't want anything I see to influence any of my design or decision making. 
I want to have:
* An easy to use and easy to look at UI.
* A responsive design and consistent experience across a range of devices.
* A timed countdown feature with an amount of acceptable errors ('lives') per attempt as well as a 'hint' feature.
* Basic user account functionality with a login so users can track progress over time.
* A means of displaying that historical data in a useful way, likely a graph.
* A means of the user being able to personalise the inteface to group collections of digits in a way useful to them. The way I memorise numbers is by diving the list into blocks of varying size and memorising the patterns of the shapes. This might be useful to others too.

## Order of Operations
This, like most of my hobby/lunch-break projects is an as-and-when-I-can undertaking. The development timeline will probably closely follow the planned features above:
1. Working UI
2. UI across devices
3. Features
4. Accounts and graphs
5. Extras
