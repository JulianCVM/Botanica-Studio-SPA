const mockServices = [
    {
        id: 1,
        title: "Masaje Relajante Botánico",
        category: "cuerpo",
        duration: "60 min",
        price: "$85",
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&auto=format&fit=crop&q=60",
        active: true,
        tags: ["Relajación", "Aromaterapia"]
    },
    {
        id: 2,
        title: "Facial Purificante con Arcilla",
        category: "rostro",
        duration: "45 min",
        price: "$60",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=60",
        active: true,
        tags: ["Limpieza", "Orgánico"]
    },
    {
        id: 3,
        title: "Manicura Spa Completa",
        category: "unas",
        duration: "45 min",
        price: "$35",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&auto=format&fit=crop&q=60",
        active: true,
        tags: ["Cuidado", "Esmalte natural"]
    },
    {
        id: 4,
        title: "Tratamiento Capilar Hidratante",
        category: "cabello",
        duration: "90 min",
        price: "$110",
        image: "https://images.unsplash.com/photo-1516975080661-46bca194f56f?w=500&auto=format&fit=crop&q=60",
        active: true,
        tags: ["Hidratación", "Brillo"]
    },
    {
        id: 5,
        title: "Exfoliación Corporal Cítrica",
        category: "cuerpo",
        duration: "40 min",
        price: "$50",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop&q=60",
        active: true,
        tags: ["Renovación", "Vitamina C"]
    },
    {
        id: 6,
        title: "Facial Anti-Edad con Sérum",
        category: "rostro",
        duration: "60 min",
        price: "$95",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&auto=format&fit=crop&q=60",
        active: true,
        tags: ["Rejuvenecimiento", "Sérum"]
    },
    {
        id: 7,
        title: "Pedicura Botánica",
        category: "unas",
        duration: "50 min",
        price: "$45",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=500&auto=format&fit=crop&q=60",
        active: false,
        tags: ["Relajante", "Pies"]
    },
    {
        id: 8,
        title: "Corte y Estilismo Natural",
        category: "cabello",
        duration: "60 min",
        price: "$70",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&auto=format&fit=crop&q=60",
        active: true,
        tags: ["Estilo", "Orgánico"]
    },
    {
        id: 9,
        title: "Envoltura Sedosa de Algas",
        category: "cuerpo",
        duration: "75 min",
        price: "$120",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format&fit=crop&q=60",
        active: true,
        tags: ["Detox", "Algas"]
    },
    {
        id: 10,
        title: "Diseño de Cejas y Pestañas",
        category: "rostro",
        duration: "30 min",
        price: "$30",
        image: "https://images.unsplash.com/photo-1512496015851-a1dc8a4746f3?w=500&auto=format&fit=crop&q=60",
        active: true,
        tags: ["Mirada", "Diseño"]
    }
];

const mockTestimonials = [
    {
        id: 1,
        name: "Valeria M.",
        service: "Masaje Relajante Botánico",
        text: "Una experiencia totalmente transformadora. El ambiente, los aromas y la atención de las especialistas te transportan a un lugar de paz instantánea.",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=valeria",
        active: true
    },
    {
        id: 2,
        name: "Camila R.",
        service: "Facial Purificante",
        text: "Mi piel nunca se había sentido tan limpia y luminosa. Los productos orgánicos que usan marcaron la diferencia para mi piel sensible.",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=camila",
        active: true
    },
    {
        id: 3,
        name: "Sofía G.",
        service: "Tratamiento Capilar",
        text: "Venía con el cabello muy maltratado y aquí hicieron magia. El diagnóstico fue exacto y el resultado fue un cabello lleno de vida.",
        stars: 4,
        image: "https://i.pravatar.cc/150?u=sofia",
        active: true
    },
    {
        id: 4,
        name: "Andrea T.",
        service: "Manicura Spa",
        text: "Me encanta que todo sea amigable con el medio ambiente, incluso el esmalte. Mis manos quedaron preciosas y el masaje de manos final fue el toque perfecto.",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=andrea",
        active: true
    },
    {
        id: 5,
        name: "Lucía P.",
        service: "Envoltura Sedosa",
        text: "Es como estar en un oasis dentro de la ciudad. El tratamiento me dejó la piel súper suave e hidratada por días enteros.",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=lucia",
        active: false
    }
];

// Hacer disponible globalmente
window.botanicaData = {
    services: mockServices,
    testimonials: mockTestimonials
};
