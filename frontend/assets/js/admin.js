document.addEventListener('DOMContentLoaded', () => {

    const data = window.botanicaData;
    
    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const toggleSidebar = document.getElementById('toggleSidebar');
    
    toggleSidebar.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            sidebar.classList.toggle('mobile-open');
        } else {
            sidebar.classList.toggle('collapsed');
        }
    });

    // View Navigation
    const navItems = document.querySelectorAll('.nav-item[data-view]');
    const views = document.querySelectorAll('.view');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Remove active from all
            navItems.forEach(nav => nav.classList.remove('active'));
            views.forEach(view => view.classList.remove('active'));
            
            // Add active to clicked
            item.classList.add('active');
            const viewId = 'view-' + item.getAttribute('data-view');
            document.getElementById(viewId).classList.add('active');
            
            if(window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
            }
        });
    });

    // Init Dashboard KPIs
    document.getElementById('kpi-services').textContent = data.services.length;
    document.getElementById('kpi-testimonials').textContent = data.testimonials.length;

    // Load Dashboard Table (last 5)
    const dashTbody = document.querySelector('#dashboardTable tbody');
    data.services.slice(0, 5).forEach(s => {
        dashTbody.innerHTML += `
            <tr>
                <td>${s.title}</td>
                <td><span class="badge">${s.category}</span></td>
                <td>${s.price}</td>
            </tr>
        `;
    });

    // Load Services Table
    const servTbody = document.querySelector('#servicesTable tbody');
    function renderServicesTable() {
        servTbody.innerHTML = '';
        data.services.forEach(s => {
            let catColor = s.category === 'rostro' ? '#FEE2E2' : 
                           s.category === 'cuerpo' ? '#FEF3C7' :
                           s.category === 'cabello' ? '#E0E7FF' : '#D1FAE5';
            let catText = s.category === 'rostro' ? '#991B1B' : 
                          s.category === 'cuerpo' ? '#92400E' :
                          s.category === 'cabello' ? '#3730A3' : '#065F46';

            servTbody.innerHTML += `
                <tr>
                    <td><img src="${s.image}" class="thumb" alt="thumb"></td>
                    <td><strong>${s.title}</strong></td>
                    <td><span class="badge" style="background:${catColor}; color:${catText}; text-transform:capitalize;">${s.category}</span></td>
                    <td>${s.duration}</td>
                    <td>${s.price}</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" ${s.active ? 'checked' : ''} onchange="toggleFakeStatus(this)">
                            <span class="slider"></span>
                        </label>
                    </td>
                    <td>
                        <div class="actions">
                            <button class="action-btn" onclick="openModal()"><svg viewBox="0 0 24 24" width="18"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></button>
                            <button class="action-btn del"><svg viewBox="0 0 24 24" width="18"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
                        </div>
                    </td>
                </tr>
            `;
        });
    }
    renderServicesTable();

    // Load Testimonials Grid
    const testGrid = document.getElementById('testimonialsGrid');
    data.testimonials.forEach(t => {
        testGrid.innerHTML += `
            <div class="config-card" style="padding: 1.5rem; display:flex; flex-direction:column; gap:1rem;">
                <div style="display:flex; align-items:center; gap:1rem;">
                    <img src="${t.image}" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
                    <div>
                        <strong>${t.name}</strong>
                        <p class="text-sm">${t.service}</p>
                    </div>
                </div>
                <p style="flex:1; font-style:italic;" class="text-sm">"${t.text}"</p>
                <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #eee; padding-top:1rem;">
                    <label class="switch">
                        <input type="checkbox" ${t.active ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                    <button class="action-btn del"><svg viewBox="0 0 24 24" width="18"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
                </div>
            </div>
        `;
    });

    // Modal Logic
    const modalUniversal = document.getElementById('modalUniversal');
    const btnAddService = document.getElementById('btnAddService');
    const modalClose = document.getElementById('modalClose');
    const modalCancel = document.getElementById('modalCancel');
    
    // Preview Image input
    const formImgUrl = document.getElementById('formImgUrl');
    const imgPreview = document.getElementById('imgPreview');
    
    formImgUrl.addEventListener('input', (e) => {
        if(e.target.value) {
            imgPreview.src = e.target.value;
            imgPreview.style.display = 'block';
        } else {
            imgPreview.style.display = 'none';
        }
    });

    window.openModal = function() {
        modalUniversal.classList.add('active');
    };

    function closeModal() {
        modalUniversal.classList.remove('active');
        document.getElementById('serviceForm').reset();
        imgPreview.style.display = 'none';
    }

    btnAddService.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);
    modalCancel.addEventListener('click', closeModal);

    document.getElementById('modalSave').addEventListener('click', () => {
        alert("Mock: Guardado exitosamente!");
        closeModal();
    });
	
	window.toggleFakeStatus = function(el) {
		// Just a fake UI toggle for demo purposes
	}
});
