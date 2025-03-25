<script>
    
        const section = document.createElement('section');
        section.className = 'product';
        section.id = 'product';

        const headingDiv = document.createElement('div');
        headingDiv.className = 'heading';

        const span = document.createElement('span');
        span.innerText = 'Best options';
        headingDiv.appendChild(span);

        const h1 = document.createElement('h1');
        h1.innerText = 'Our Services';
        headingDiv.appendChild(h1);

        section.appendChild(headingDiv);

        const productContainer = document.createElement('div');
        productContainer.className = 'product-container';


        const products = [
            {
                imgSrc: 'businessgrowth.jpeg',
                title: 'Sales & Business Growth',
                description: 'Boost revenue with proven sales strategies, lead generation, and CRM automation.',
                buttonText: 'Learn More',
                buttonLink: 'https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst'
            },
            {
                imgSrc: 'Digital marketing.jpeg',
                title: 'Digital Marketing & Branding',
                description: 'Enhance brand visibility with SEO, social media marketing, and paid ad campaigns.',
                buttonText: 'Learn More',
                buttonLink: '#'
            },
            {
                imgSrc: 'automation.jpeg',
                title: 'Business Automation',
                description:'Streamline operations with AI-driven automation, CRM solutions, and process optimization.',
                buttonText: 'Learn More',
                buttonLink: '#'
            },
            {
                imgSrc: 'startup2.jpeg',
                title: 'Startup Scaling Solutions',
                description:'Develop go-to-market strategies, optimize pricing, and secure funding for business growth.',
                buttonText: 'Learn More',
                buttonLink: '#'
            },
            {
                imgSrc: 'market strategy.jpg',
                title: 'Market Research & Strategy',
                description:'Leverage data-driven insights to analyze competitors and craft winning business strategies.',
                buttonText: 'Learn More',
                buttonLink: '#'
            },
            {
                imgSrc: 'LeadGeneration.webp',
                title: 'Lead Generation & Outreach',
                description:'Maximize conversions with targeted cold emails, outbound marketing, and sales funnel optimization.',
                buttonText: 'Learn More',
                buttonLink: '#'
            },
            {
                imgSrc: 'booking.jpeg',
                title: 'Bookkeeping & Accounting',
                description:'Providing accurate, hassle-free financial management to streamline your business finances.',
                buttonText: 'Learn More',
                buttonLink: '#'
            },
            {
                imgSrc: 'CFO.jpg',
                title: 'Virtual CFO Services',
                description:'Offering strategic financial planning, insights, and analysis to drive your companys growth.',
                buttonText: 'Learn More',
                buttonLink: '#'
            },
            {
                imgSrc: 'appdevelopment2.webp',
                title: 'Website & App Development',
                description:'Creating custom websites and apps through our network of skilled freelancers to enhance your digital presence.',
                buttonText: 'Learn More',
                buttonLink: '#'
            },
        ];

        products.forEach(product => {
        const box = document.createElement('div');
        box.className = 'box';
        
        const img = document.createElement('img');
        img.src = product.imgSrc;
        img.alt = product.title;
        box.appendChild(img);

        const title = document.createElement('h1');
        title.innerText = product.title;
        box.appendChild(title);

        if (product.description) {
            const description = document.createElement('h3');
            description.innerText = product.description;
            box.appendChild(description);
        } else if (product.price) {
            const price = document.createElement('h3');
            price.innerText = product.price;
            box.appendChild(price);
        }

        productContainer.appendChild(box);
       

    });

    section.appendChild(productContainer);
    document.body.appendChild(section);
</script>
