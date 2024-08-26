
# InTehBel Test Task

## 1. **Introduction**

- Develop an application by implementing the design specified in Figma and integrating it with data from an API.

## 2. **Technologies Used**

- **Next.js 14 (App Router)**:
    - **Justification**: Provides efficient routing management and improves server-side and client-side state handling.
- **TypeScript**:
    - **Justification**: Enhances development by providing static typing, which improves tooling support and autocomplete.
- **Tailwind CSS**:
    - **Justification**: Offers a flexible and convenient way to style components, speeding up development and improving style maintainability.
- **Axios**:
    - **Justification**: Simplifies working with HTTP requests and supports promises for handling asynchronous operations.
- **@headlessui/react**:
    - **Justification**: Provides a set of accessible, unstyled UI components, allowing easy integration and customization in the application.
- **Jest** and **React Testing Library, Cypress**:
    - **Justification**: Used for testing components and application logic, ensuring reliable and comprehensive testing. But since Jest currently does not support async Server Components, I have been running unit tests for synchronous Server and Client Components. For async components, I have been using E2E tests with Cypress to ensure everything functions correctly.
    
    To run E2E tests with Cypress, use the command `npm run test:e2e`. For running Jest and React library tests, you can use `npm run test`.

## 3. **API Accessibility Issues**

- **Lack of API Access**:
    - **Reason**: VPN access was not available, so the original API could not be accessed.
    - **Solution**: Used Postman to create mock APIs based on data observed through the browser with VPN.
    
    My API returns the same values as yours. You can verify this by checking the following links:
    
    [Mock API - Friends](https://1bfebd46-b0f6-4752-9098-6c0be57b8e29.mock.pstmn.io/friends)  
    [Mock API - Friends by ID](https://1bfebd46-b0f6-4752-9098-6c0be57b8e29.mock.pstmn.io/friends/id)
    
- **Images**:
    - **Issue**: Images were inaccessible without VPN.
    - **Solution**: Replaced images with placeholders or alternatives from other sources.

## 4. **Deployment**

- **Platform**: Vercel
    - **Justification**: Vercel is a powerful platform optimized for deploying Next.js applications. It provides seamless integration with Git, automated deployments, and a global Content Delivery Network (CDN) for fast, reliable performance. Vercel’s support for server-side rendering and static site generation ensures that Next.js applications are deployed efficiently and perform optimally.
    - **Link**: [Live Application](https://friends-jd091ptdn-alenas-projects-c789531f.vercel.app/)

## 5. **Necessary Changes and Observations**

- **Status Array**:
    - **Observation**: The API response included an array of statuses, while the Figma design only showed one status.
    - **Assumption**: The design might intend for a single status, but the array was used to ensure the application's functionality was preserved.
- **Note**: Changes and observations were made to ensure application accuracy and alignment with requirements.

## 6. **Testing**

- **Conducted Tests**:
    - **Unit Tests**: Verified individual components and their functionality.
    - **E2E Tests**: Checked interactions between components and integration with mock APIs.
    - **UI Tests**: Assessed the user interface for consistency with requirements and design mockups.

## 7. **Time Spent**

- **Total Time Worked**: 14 hours.
- **Development**: 7 hours spent on application development and feature implementation.
- **Testing**: 4 hours spent writing and executing tests.
- **Changes and Fixes**: 3 hours addressing issues and adapting to API inaccessibility.

## 8. **Conclusion**

This project has been an incredibly engaging and rewarding experience. I would like to extend my sincere thanks to our team for providing this opportunity!

Throughout the development process, I utilized Next.js, which I particularly appreciate for its robust routing capabilities. Next.js excels in routing, and it’s one of the reasons I enjoy working with it. However, since we were working with a mock API, the routing functionality wasn’t fully utilized. For API data retrieval, especially for specific profiles, passing the ID through URL parameters is essential.

Another advantage of Next.js is its server-side rendering, which significantly enhances optimization. However, this feature led to some unexpected behavior during testing. As mentioned earlier, since Jest currently does not support async Server Components, I conducted unit tests for synchronous Server and Client Components. For testing async components, I employed E2E tests with Cypress to ensure comprehensive functionality.

I successfully tested the core components and deployed the application.

While the project is complete, there is still room for improvement, such as refining the code further, enhancing responsiveness, and expanding the test coverage.

Thank you for your time, and enjoy exploring the application!

