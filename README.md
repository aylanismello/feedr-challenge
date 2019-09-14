# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!


# Some Notes on Development
The first thing I did was break down the existing HTML structure to their most logical components and subcomponents. I did this on pen and paper.

Some Components, such as Items, seemed to immediately be reusable, so I overrode their functionality.

I decided to manage all state in the top level App component, since the component tree wasn't that deep or nested and
wouldn't cause problems with data propogation.

For unit tests, I wanted to make sure that my logic was sound for overall Component functionality, as well as class functions
in the App component that separate selected and unselected items.

As indicated in the instructions - I didn't add any real styling additions. My main goal was to create a functional version of what was asked
in the alloted time frame, and to ensure future functionality and maintanability with robust tests.
