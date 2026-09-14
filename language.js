(function () {
  'use strict';

  var common = {
    'تخطَّ إلى المحتوى': 'Skip to content',
    'وكالة ملاحية · شحن وتخليص · خدمات لوجستية': 'Shipping agency · Freight forwarding · Logistics',
    'منذ 2007': 'Since 2007',
    'الدمام': 'Dammam', 'جدة': 'Jeddah', 'الرياض': 'Riyadh', 'ينبع': 'Yanbu', 'جازان': 'Jazan', 'رابغ': 'Rabigh', 'الجبيل': 'Jubail', 'رأس تنورة': 'Ras Tanura', 'رأس الخفجي': 'Ras Al Khafji', 'رأس الخير': 'Ras Al Khair',
    'شرف للملاحة المحدودة': 'Sharaf Shipping Agency Co. Ltd',
    'شعار شرف للملاحة': 'Sharaf Shipping Agency logo',
    'المملكة العربية السعودية': 'Kingdom of Saudi Arabia',
    'الموانئ': 'Ports', 'الخدمات': 'Services', 'الشبكة': 'Network', 'الشبكة والمكاتب': 'Network & Offices',
    'ملف الشركة': 'Company Profile', 'الرؤية والرسالة': 'Vision & Mission', 'المصطلحات': 'Glossary', 'مصطلحات الشحن': 'Shipping Glossary',
    'التوظيف': 'Careers', 'اتصل بنا': 'Contact', 'دليل الموانئ': 'Port Directory', 'اطلب خدمة': 'Request a Service',
    'القائمة': 'Menu', 'إغلاق': 'Close', 'الرئيسية': 'Home', 'صفحة الميناء الكاملة ↗': 'Full port page ↗',
    'أرسل استفساراً': 'Send an enquiry', 'أرسل استفسارك': 'Send your enquiry', 'اتصال مباشر': 'Direct contact', 'خدمات أخرى': 'Other services',
    'مراجع': 'Resources', 'شروط التعامل القياسية (PDF) ↗': 'Standard Trading Conditions (PDF) ↗', 'الموقع على الخريطة ↗': 'View on map ↗',
    'الصفحة الكاملة': 'Full page', 'نطاق الخدمة': 'Service scope', 'نطاق خدماتنا يشمل': 'Our services include',
    'نموذج التواصل': 'Contact form', 'الاسم': 'Name', 'البريد الإلكتروني': 'Email', 'الخدمة': 'Service', 'الميناء': 'Port',
    'الموضوع': 'Subject', 'الرسالة': 'Message', 'تفاصيل الاستفسار': 'Enquiry details', 'إرسال': 'Send',
    'ملخّص الاستفسار': 'Enquiry summary', 'المكتب المستقبِل': 'Receiving office', 'ساعات العمل': 'Working hours',
    'كل المكاتب': 'All offices', 'المكاتب الإقليمية': 'Regional offices', 'المنطقة الشرقية': 'Eastern Region', 'المنطقة الغربية': 'Western Region',
    'ابحث في المصطلحات': 'Search the glossary', 'ابحث بالمصطلح الإنجليزي أو العربي…': 'Search by English or Arabic term…',
    'لا توجد نتائج مطابقة.': 'No matching terms found.', 'القاموس الكامل — 94 مصطلحاً': 'Full glossary — 94 terms',
    'المعلومات': 'Information', 'معلومات الموانئ': 'Port information', 'الموقع الرسمي': 'Official website', 'عدد الأرصفة وأنواعها': 'Berths and types', 'نوع الرافعات وعددها': 'Crane type and count',
    'اسم الميناء': 'Port name', 'مرجع': 'Reference', 'فاكس': 'Fax', 'الأحد إلى الخميس': 'Sunday to Thursday', 'اقرأ ملف الشركة': 'Read the company profile',
    'قاموس مرجعي بأربعة وتسعين مصطلحاً ملاحياً وتجارياً، مع المقابل العربي والشرح. ابحث بالمصطلح الإنجليزي أو العربي.': 'A practical reference of 94 shipping and trade terms with clear explanations. Search by term or keyword.',
    'خريطة تغطية شبكة المجموعة كما تعرضها شرف للملاحة.': 'Group network coverage map used by Sharaf Shipping Agency.',
    'اترك لنا رسالة وسنعاود التواصل معك في أقرب وقت.': 'Leave us a message and our team will get back to you shortly.', 'حدّد الميناء والخدمة المطلوبة وسنوجّه رسالتك إلى المكتب المختص.': 'Select the port and service; we will route your message to the appropriate office.',
    'تُوجَّه استفسارات المنطقة الشرقية إلى': 'Eastern Region enquiries are handled by', 'واستفسارات المنطقة الغربية إلى': 'Western Region enquiries are handled by',
    'غاطس القناة الملاحية': 'Channel draught', 'الغاطس عند الأرصفة': 'Draught at berths', 'عوّامة الاقتراب': 'Approach buoy',
    'الخرائط البحرية البريطانية (BA)': 'British Admiralty charts (BA)', 'المسافة من محطة الإرشاد إلى الرصيف': 'Pilot station to berth',
    'مدى المد والجزر': 'Tidal range', 'كثافة المياه': 'Water density', 'أوقات ورديات العتالة': 'Stevedore shifts',
    'العتالة: الميناء أم القطاع الخاص': 'Stevedoring: port or private', 'الملاحة الليلية': 'Night navigation',
    'الساحات المكشوفة': 'Open storage yards', 'ساحات مكشوفة للبضائع العامة': 'Open general-cargo storage', 'مساحات التخزين المغطاة': 'Covered storage',
    'انتقل مباشرة إلى بيانات ميناء': 'Jump to port data', 'الأرصفة، الغاطس، الرافعات، ورديات العتالة، والملاحة الليلية.': 'Berths, draught, cranes, stevedore shifts and night navigation.',
    'اختر الميناء': 'Select a port', 'الدليل الكامل': 'Full directory', 'بيانات الموانئ': 'Port data', 'دليل الموانئ السعودية': 'Saudi port directory',
    'الخدمات العشر': 'Ten services', 'التوجّه': 'Direction', 'المرجع': 'Reference', 'استفسار': 'Enquiry',
    'أرسل استفسارك إلى المكتب المختص': 'Send your enquiry to the right office', 'حدّد الخدمة والميناء وسنوجّه رسالتك تلقائياً إلى مكتب الدمام أو جدة بحسب المنطقة.': 'Select a service and port; we will route your message to the Dammam or Jeddah office by region.',
    'للاتصال المباشر: الدمام': 'For direct contact: Dammam', 'جدة': 'Jeddah',
    'شبكة المكاتب': 'Office network', 'التصفية المكاتب': 'Filter offices', 'بريد': 'Email', 'هاتف': 'Phone',
    'أرسل سيرتك الذاتية': 'Send your CV', 'كيف تتقدّم': 'How to apply', 'الصفحة الكاملة': 'Full page'
  };

  var services = {
    'tanker-services': {
      title: 'Tanker Services', tagline: 'Specialist handling for crude, refined products, gas carriers, Aframax vessels and VLCCs.',
      paragraphs: [
        'Our tanker team combines local port knowledge, terminal relationships and disciplined documentation to keep every call safe, efficient and commercially controlled.',
        'We coordinate berthing, cargo operations, crew services, inspections, repairs and port accounts while providing clear updates before arrival, throughout the call and after departure.',
        'Our marine accounting and procurement specialists verify disbursement and port costs so owners and charterers have an accurate view of every movement.',
        'We support leading owners and charterers across the Kingdom, with a proven record of dependable execution and transparent reporting.'
      ], bullets: ['Owner or charterer representation at Saudi ports', 'Fast, safe and cost-controlled vessel turnaround', 'Live operational updates and reporting', 'Single point of contact for vessel operations', 'Crew, victualing and technical support', 'Survey, repair and maintenance coordination', 'Expense and disbursement control']
    },
    'dry-bulk-services': {
      title: 'Dry Bulk Services', tagline: 'End-to-end agency support for Handy, Panamax and Capesize bulk carriers.',
      paragraphs: ['We manage dry-bulk calls with careful planning around cargo readiness, berth windows, documentation and terminal requirements.', 'Our teams coordinate owners, charterers, terminals, surveyors and stevedores to protect schedules and cargo interests.', 'Every call is supported by practical local knowledge, clear cost control and timely operational reporting.'], bullets: ['Full agency representation at Saudi ports', 'Berth, cargo and stevedore coordination', 'Documentation and customs support', 'Survey, inspection and crew services', 'Disbursement and port-cost control']
    },
    'liner-services': {
      title: 'Liner Services', tagline: 'Reliable local representation for global and regional container lines.',
      paragraphs: ['Sharaf Shipping supports liner operators with a responsive port agency team and structured communication at every stage of the call.', 'We handle container, reefer, flat-rack and special-equipment requirements while coordinating terminals, authorities, cargo interests and inland partners.', 'Our network gives operators a single accountable partner across the Kingdom.'], bullets: ['Vessel husbandry and port call management', 'Container, reefer and special-cargo support', 'Terminal and authority coordination', 'Documentation, manifests and reporting', 'Crew, stores and technical assistance']
    },
    'ro-ro-services': {
      title: 'Ro-Ro Services', tagline: 'Carefully planned agency support for vehicle and rolling-cargo operations.',
      paragraphs: ['Ro-Ro calls demand accurate pre-arrival planning and close communication between the vessel, terminal, cargo interests and local authorities.', 'We coordinate documentation, cargo readiness, berth operations and turnaround reporting so every movement is controlled and visible.', 'Our specialists remain available throughout the call to resolve operational issues quickly.'], bullets: ['Pre-arrival planning and documentation', 'Terminal, cargo and authority coordination', 'Vehicle and rolling-cargo handling support', 'Crew, stores and technical services', 'Clear turnaround reporting']
    },
    'general-cargo': {
      title: 'General Cargo', tagline: 'Experienced handling for break-bulk, packaged and project-related cargo.',
      paragraphs: ['General cargo requires practical judgement, careful documentation and disciplined coordination. Our local teams have experience across a wide range of commodities and packing formats.', 'We work with owners, charterers, terminals, surveyors and cargo interests to protect the vessel schedule and cargo condition.', 'From pre-arrival planning to final departure reporting, our process is clear and accountable.'], bullets: ['Break-bulk and packaged cargo calls', 'Cargo documentation and customs liaison', 'Stevedore and terminal coordination', 'Survey, inspection and tally support', 'Port cost and disbursement management']
    },
    'projects-cargo': {
      title: 'Project Cargo', tagline: 'Engineering-minded planning for heavy, oversized and out-of-gauge shipments.',
      paragraphs: ['Project cargo demands more than a standard port call. We plan around dimensions, lifting requirements, route constraints, berth availability and the sequence of every movement.', 'Our teams coordinate cargo owners, vessel operators, terminals, surveyors, transport providers and authorities from the first plan to final delivery.', 'You receive a practical operating plan, transparent updates and controlled execution.'], bullets: ['Heavy-lift and out-of-gauge cargo planning', 'Route, berth and equipment coordination', 'Survey, lifting and securing support', 'Project documentation and customs liaison', 'Single-point operational reporting']
    },
    'offshore-services': {
      title: 'Offshore Services', tagline: '24/7 marine support for offshore and energy operations.',
      paragraphs: ['Offshore operations rely on dependable supply, safety and response times. Our team provides coordinated agency support for vessels, crews and project movements.', 'We arrange port calls, crew changes, provisions, technical attendance, repairs and documentation while keeping stakeholders aligned around the operating window.', 'Local relationships and round-the-clock availability help keep offshore programmes moving.'], bullets: ['24/7 vessel and crew support', 'Supply, provisions and technical attendance', 'Crew changes and documentation', 'Port, terminal and authority coordination', 'Safety-focused operational reporting']
    },
    'freight-forwarding': {
      title: 'Freight Forwarding', tagline: 'Port-to-port and door-to-door movement by sea, air and road.',
      paragraphs: ['We design practical freight solutions for full-container, groupage and special shipments, connecting Saudi ports with regional and global trade lanes.', 'Our team manages booking, documentation, customs coordination and delivery planning with clear milestones and one accountable point of contact.', 'The result is less friction between carrier, port, customs and final destination.'], bullets: ['FCL and groupage shipments', 'Sea, air and road freight options', 'Import and export documentation', 'Customs and delivery coordination', 'Shipment visibility and exception handling']
    },
    'logistics-services': {
      title: 'Logistics Services', tagline: 'Connected logistics from consolidation and clearance to storage and delivery.',
      paragraphs: ['Our logistics team connects the steps between port, warehouse and final destination so cargo moves with fewer handovers and clearer accountability.', 'We coordinate consolidation, deconsolidation, customs, storage, distribution and supply-chain support around your operational requirements.', 'You get a flexible local partner backed by a nationwide port network.'], bullets: ['Consolidation and deconsolidation', 'Customs and clearance support', 'Storage, distribution and delivery', 'Supply-chain coordination', 'Local operational visibility']
    },
    'warehousing': {
      title: 'Warehousing', tagline: 'Secure, flexible storage with practical support for the next movement.',
      paragraphs: ['Our warehousing service gives importers, exporters and project teams a controlled place to receive, hold and prepare cargo.', 'We support inventory handling, cross-docking, documentation and onward distribution in coordination with your freight plan.', 'Every movement is managed with clear records and responsive local support.'], bullets: ['Secure storage and cargo handling', 'Inventory and documentation support', 'Cross-docking and consolidation', 'Distribution and delivery coordination', 'Flexible support for project cargo']
    }
  };

  var ports = {
    'ميناء رأس الخفجي':'Ras Al Khafji Port', 'ميناء الملك عبدالعزيز بالدمام':'King Abdulaziz Port, Dammam', 'ميناء رأس تنورة ومحطات جعيمة':'Ras Tanura & Juaymah Terminals', 'ميناء الجبيل التجاري':'Jubail Commercial Port', 'ميناء الملك فهد الصناعي بالجبيل':'King Fahd Industrial Port, Jubail', 'ميناء رأس الخير':'Ras Al Khair Port', 'ميناء جدة الإسلامي':'Jeddah Islamic Port', 'ميناء رابغ — بترورابغ':'Rabigh — PetroRabigh Port', 'ميناء ينبع التجاري':'Yanbu Commercial Port', 'ميناء الملك فهد الصناعي بينبع':'King Fahd Industrial Port, Yanbu', 'ميناء جازان التجاري':'Jazan Commercial Port'
  };
  var serviceNames = {'خدمات الناقلات':'Tanker Services','خدمات البضائع السائبة':'Dry Bulk Services','خدمات الخطوط الملاحية المنتظمة':'Liner Services','خدمات سفن الدحرجة':'Ro-Ro Services','البضائع العامة':'General Cargo','بضائع المشاريع':'Project Cargo','الخدمات البحرية البعيدة عن الشاطئ':'Offshore Services','الشحن والتخليص':'Freight Forwarding','الخدمات اللوجستية':'Logistics Services','التخزين':'Warehousing'};
  var regionNames = {'الكل':'all','الإقليمي':'regional','الشرقية':'eastern','الغربية':'western'};
  var phrases = [
    ['إجمالي الأرصفة','Total berths'], ['عوّامة رسو مفردة','Single buoy mooring'], ['عوّامة الممر الملاحي','Fairway buoy'], ['عوّامة الاقتراب','Approach buoy'],
    ['غير متوفر','Not available'], ['على مدار الساعة طوال أيام السنة، رهناً بالرؤية والأحوال الجوية','24/7, subject to visibility and weather conditions'], ['على مدار الساعة','24/7'],
    ['القطاع الخاص','private sector'], ['الوردية الأولى','First shift'], ['الوردية الثانية','Second shift'], ['ساعة تشغيل','operating hours'],
    ['ميل بحري','nautical miles'], ['كثافة المياه','Water density'], ['مياه بحر','seawater'], ['مكتبين الإقليميين','regional offices'],
    ['مكتب رقم','Office'], ['مكتب ','Office '], ['الدور الثاني','Second floor'], ['الدور الرابع','Fourth floor'], ['الدور الخامس','Fifth floor'], ['جناح','Suite'],
    ['مبنى','Building'], ['شارع','Street'], ['طريق','Road'], ['ص.ب','P.O. Box'], ['الطابق','Floor'], ['الهيئة الملكية بينبع','Royal Commission for Yanbu'],
    ['بجوار','next to'], ['تقاطع','intersection of'], ['الرؤية','Vision'], ['الرسالة','Mission'],
    ['الدمام','Dammam'], ['جدة','Jeddah'], ['الرياض','Riyadh'], ['ينبع','Yanbu'], ['جازان','Jazan'], ['رابغ','Rabigh'], ['الجبيل','Jubail'], ['رأس تنورة','Ras Tanura'], ['رأس الخفجي','Ras Al Khafji'], ['رأس الخير','Ras Al Khair'],
    ['الموقع الرسمي','Official website'], ['الموقع','Location'], ['مشغّل المحطة','Terminal operator']
  ];

  function textNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var out = [], node;
    while ((node = walker.nextNode())) { if (node.parentElement && !node.parentElement.closest('script,style')) out.push(node); }
    return out;
  }
  function translateCommon() {
    textNodes(document.body).forEach(function (node) {
      var raw = node.nodeValue, trimmed = raw.trim();
      if (!trimmed) return;
      if (common[trimmed]) node.nodeValue = raw.replace(trimmed, common[trimmed]);
      else if (serviceNames[trimmed]) node.nodeValue = raw.replace(trimmed, serviceNames[trimmed]);
      else if (ports[trimmed]) node.nodeValue = raw.replace(trimmed, ports[trimmed]);
    });
    document.querySelectorAll('[alt],[placeholder],[title],label[for]').forEach(function (el) {
      ['alt','placeholder','title'].forEach(function (attr) { var v=el.getAttribute(attr); if (v && common[v]) el.setAttribute(attr, common[v]); });
    });
    document.querySelectorAll('[aria-label]').forEach(function (el) { var v=el.getAttribute('aria-label'); if (common[v]) el.setAttribute('aria-label',common[v]); });
    textNodes(document.body).forEach(function (node) {
      var v=node.nodeValue;
      phrases.slice().sort(function(a,b){return b[0].length-a[0].length;}).forEach(function(pair){v=v.split(pair[0]).join(pair[1]);});
      node.nodeValue=v;
    });
  }
  function setText(sel, value) { var el=document.querySelector(sel); if (el) el.textContent=value; }
  function pageKey() { var p=location.pathname.replace(/\/$/,''); var parts=p.split('/').filter(Boolean); if(!parts.length || parts[parts.length-1]==='sharaf-shipping-agency-yanbu') return 'home'; return parts[parts.length-1]; }
  function renderService(key) {
    var d=services[key], prose=document.querySelector('.prose'); if (!d || !prose) return;
    var figure=prose.querySelector('figure');
    prose.innerHTML=''; if (figure) prose.appendChild(figure);
    d.paragraphs.forEach(function (p) { var el=document.createElement('p'); el.textContent=p; prose.appendChild(el); });
    var h=document.createElement('h2'); h.textContent='Service scope'; prose.appendChild(h);
    var ul=document.createElement('ul'); d.bullets.forEach(function (b) { var li=document.createElement('li'); li.textContent=b; ul.appendChild(li); }); prose.appendChild(ul);
    var c=document.createElement('p'), a=document.createElement('a'); a.className='btn'; a.href=(location.pathname.indexOf('/services-details/')>=0?'../../':'../')+'contact-us/'; a.textContent='Request this service'; c.appendChild(a); prose.appendChild(c);
    setText('.phead h1', d.title); setText('.phead .sub', d.tagline); document.title=d.title+' · Sharaf Shipping Agency — Saudi Arabia';
  }
  function renderCore(key) {
    var p=document.querySelector('.phead');
    var data={
      'company-profile':['Company Profile','A Saudi marine, freight and logistics partner established in 2007 as part of the Sharaf Group.'],
      'mission-vision':['Vision & Mission','A long-term commitment to dependable service, safety and measurable value for owners, charterers and cargo interests.'],
      'network':['Network & Offices','Nine offices covering Saudi ports across the Eastern and Western regions.'],
      'port-info':['Port Directory','Operational reference data for eleven Saudi ports served by Sharaf Shipping Agency.'],
      'contact-us':['Contact','Our team is ready to respond from the regional offices and local port teams.'],
      'careers':['Careers','We are always looking for capable people to join our growing teams.'],
      'glossary-of-terms':['Shipping Glossary','A practical reference for shipping and trade terminology used by vessel and cargo professionals.']
    }[key];
    if (p && data) { setText('.phead h1',data[0]); setText('.phead .sub',data[1]); document.title=data[0]+' · Sharaf Shipping Agency — Saudi Arabia'; }
    if (key==='company-profile') {
      var prose=document.querySelector('.prose'); if(prose){ var fig=prose.querySelector('figure'); prose.innerHTML=''; ['Sharaf Shipping Agency is committed to understanding our customers’ marine, logistics and port-service requirements and managing them with precision.','Established in Saudi Arabia in 2007 as the Sharaf Group expanded, the company has grown from a port-agency specialist into a connected freight-forwarding and logistics partner.','Our network covers Dammam, Jeddah, Riyadh, Yanbu, Rabigh, Jazan, Jubail, Ras Tanura, Ras Al Khair and Ras Al Khafji. Specialist teams support tankers, dry bulk, break-bulk, liner and Ro-Ro operations across these locations.','Strong relationships with ports, customs and terminal authorities help deliver efficient vessel turnaround, clear operational updates and useful market intelligence.','We believe our people are our greatest asset, supported by robust information systems, transparent accounting and dependable local relationships.'].forEach(function(t){var e=document.createElement('p');e.textContent=t;prose.appendChild(e);}); var h=document.createElement('h2');h.textContent='Our services include';prose.appendChild(h);var ul=document.createElement('ul');['Port agency','Container services','Tanker services','Dry and break-bulk cargo','Project cargo','Logistics','Freight forwarding','Offshore services'].forEach(function(t){var li=document.createElement('li');li.textContent=t;ul.appendChild(li);});prose.appendChild(ul);if(fig)prose.appendChild(fig); }
    }
    if (key==='mission-vision') { var pr=document.querySelector('.prose'); if(pr){pr.innerHTML='<h2>Vision</h2><p>To be a regional leader by keeping our promises, exceeding expectations and building long-term relationships with customers and partners.</p><h2>Mission</h2><p>Sharaf Shipping Agency delivers integrated marine, logistics and port services with high standards of quality and safety. We help clients reduce cost, improve revenue and strengthen their supply chain.</p>'; } }
    if (key==='careers') { var cp=document.querySelector('.prose'); if(cp){cp.innerHTML='<p>Our people are our greatest asset.</p><p>As our operations continue to grow, we are always looking for capable people to join our teams. If teamwork, commitment and energy are among your strengths, we would like to hear from you.</p><p>We offer a professional environment and a rewarding career path.</p><h2>How to apply</h2><p>Send your CV and a short cover letter to our HR team. Accepted formats: <span class="mono">doc</span>, <span class="mono">docx</span> or <span class="mono">pdf</span>.</p><p><a class="btn" href="mailto:info@ssadammam.com?subject=Job%20application">Send your CV</a></p>'; } }
    if (key==='network') { setText('.pgrid > p','Sharaf Shipping operates one of the Kingdom’s most connected regional networks. Clients benefit from broad coverage of the main Saudi markets through offices grouped into Eastern and Western regions.'); document.querySelectorAll('.region-tab').forEach(function(b){var ar=b.dataset.r; b.textContent=regionNames[ar] ? ({all:'All offices',regional:'Regional offices',eastern:'Eastern Region',western:'Western Region'}[regionNames[ar]]) : b.textContent;}); document.querySelectorAll('.office h3').forEach(function(h){h.textContent=h.textContent.replace('مكتب','Office').replace('Dammam','Dammam').replace('Jeddah','Jeddah');}); }
    if (key==='glossary-of-terms') { document.querySelectorAll('.gterm').forEach(function(t){ var term=t.querySelector('b'); var p=t.querySelector('p'); if(term && p) p.textContent=term.textContent+' — a standard term used in shipping, trade or port operations.'; var i=t.querySelector('i'); if(i) i.textContent='English definition'; }); }
  }
  function translateForms() {
    document.querySelectorAll('select option').forEach(function (o) { var ar=o.dataset.ar || o.value || o.textContent.trim(); o.dataset.ar=ar; if(serviceNames[ar]) o.textContent=serviceNames[ar]; else if(ports[ar]) o.textContent=ports[ar]; });
    var ph={'اسم السفينة، تاريخ الوصول المتوقع، نوع البضاعة، أو أي تفاصيل تساعد الفريق':'Vessel name, expected arrival, cargo type or any detail that helps our team'};
    document.querySelectorAll('textarea,input').forEach(function(e){var p=e.getAttribute('placeholder');if(p&&ph[p])e.setAttribute('placeholder',ph[p]);});
  }
  function translateOfficeAddresses() {
    var addresses={
      'Office Dammam':'Sharaf Shipping Agency Co. Ltd\nSecond Floor, Suite A22, Al Lulu Building\nKing Abdulaziz Street, Al Amamra\nP.O. Box 6553, Dammam 31492\nKingdom of Saudi Arabia',
      'Office Jeddah':'Sharaf Shipping Agency Co. Ltd\nJeddah Gate E9, Fifth Floor\nOffice 503, Al Fayha\nKing Abdullah Road, Emaar Square\nJeddah 22241, Kingdom of Saudi Arabia',
      'Office Riyadh':'Sharaf Shipping Agency Co. Ltd\nFifth Floor, Office 26\nSalah Al Din Al Ayyubi Road\nAl Malaz, Riyadh 12836\nKingdom of Saudi Arabia',
      'Office Ras Tanura':'Sharaf Shipping Agency Co. Ltd\nAl Ansari Building, P.O. Box 1420\nNear the Saudi Chamber of Commerce\nPrince Mohammed bin Fahd Street\nAl Dana 21, Ras Tanura\nKingdom of Saudi Arabia',
      'Office Jubail':'Sharaf Shipping Agency Co. Ltd\nFourth Floor, Office 308\nMakkah Al Mukarramah Street\nKing Faisal Street intersection\nP.O. Box 2008, Jubail 31951\nKingdom of Saudi Arabia',
      'Office Ras Al Khafji':'Sharaf Shipping Agency Co. Ltd\nSecond Floor, Office 11\nFalah Hamad Al Nahaab Al Marri Building\nGold Market / King Khalid bin Abdulaziz Street\nRas Al Khafji, Kingdom of Saudi Arabia',
      'Office Yanbu':'Sharaf Shipping Agency Co. Ltd\nSecond Floor, Office 3, Al Sayed Commercial Centre\nAl Wadi Street, Royal Commission for Yanbu\nP.O. Box 30213, Yanbu\nKingdom of Saudi Arabia',
      'Office Jazan':'Sharaf Shipping Agency Co. Ltd\nSecond Floor, Office 2, Building 7990\nKing Faisal Street, Al Safa District\nJazan, Kingdom of Saudi Arabia',
      'Office Rabigh':'Sharaf Shipping Agency Co. Ltd\nAbboud Building, Second Floor\nNext to Rabigh General Hospital\nP.O. Box 24204, Rabigh\nKingdom of Saudi Arabia'
    };
    document.querySelectorAll('.office').forEach(function(card){var h=card.querySelector('h3'),a=card.querySelector('.addr');if(h&&a&&addresses[h.textContent.trim()])a.textContent=addresses[h.textContent.trim()];});
  }
  function translateDynamicPorts() {
    document.querySelectorAll('.port-btn span').forEach(function(e){if(ports[e.textContent.trim()])e.textContent=ports[e.textContent.trim()];});
    document.querySelectorAll('.port-btn small').forEach(function(e){e.textContent=e.textContent.trim()==='المنطقة الشرقية'?'Eastern Region':'Western Region';});
    if(window.__PORTS){ window.__PORTS.forEach(function(p){p.en=ports[p.ar]||p.ar;p.regionEn=p.region==='المنطقة الشرقية'?'Eastern Region':'Western Region';}); var list=document.getElementById('port-list'); if(list) list.querySelectorAll('.port-btn').forEach(function(b){var i=Number(b.dataset.i),p=window.__PORTS[i];if(p){b.querySelector('span').textContent=p.en;b.querySelector('small').textContent=p.regionEn;}}); }
    var panel=document.getElementById('port-panel'); if(panel){ textNodes(panel).forEach(function(node){var v=node.nodeValue;phrases.slice().sort(function(a,b){return b[0].length-a[0].length;}).forEach(function(pair){v=v.split(pair[0]).join(pair[1]);});node.nodeValue=v;}); }
  }
  function addToggle() {
    var act=document.querySelector('.head-act'); if(!act || document.getElementById('lang-toggle')) return;
    var b=document.createElement('button'); b.id='lang-toggle'; b.className='btn btn--ghost lang-toggle'; b.type='button'; b.textContent='English'; b.setAttribute('aria-label','Switch to English'); b.setAttribute('aria-pressed','false');
    b.addEventListener('click',function(){localStorage.setItem('sharaf-language','en'); location.reload();}); act.insertBefore(b,act.firstChild);
  }
  function english() {
    document.documentElement.lang='en'; document.documentElement.dir='ltr'; document.body.classList.add('lang-en');
    addToggle(); var t=document.getElementById('lang-toggle'); if(t){t.textContent='العربية';t.setAttribute('aria-label','Switch to Arabic');t.setAttribute('aria-pressed','true');t.addEventListener('click',function(){localStorage.setItem('sharaf-language','ar');location.reload();});}
    translateCommon(); translateForms(); translateDynamicPorts();
    var key=pageKey(); if(key==='home'){ setText('.tagline','Shipping agency · Since 2007');var hero=document.querySelector('.hero h1');if(hero)hero.innerHTML='A Saudi shipping agency <u>at every port you need</u>';setText('.hero .lede','Sharaf Shipping combines local port expertise with reliable marine, freight and logistics services across nine offices covering the Eastern and Western regions of Saudi Arabia.');setText('.jump h2','Jump to port data');setText('.jump p','Berths, draught, cranes, stevedore shifts and night navigation.');setText('#ports .lead-in h2','Saudi port directory');setText('#ports .lead-in p','Operational data for eleven ports we serve, including berths, draught, cranes, pilot distance, water density, stevedore shifts and night navigation.');setText('#services .lead-in h2','Ten services for vessels, cargo and supply chains');setText('#services .lead-in p','From tanker, bulk, liner and Ro-Ro agency to freight forwarding, warehousing, logistics and project cargo support.');setText('#about .lead-in h2','Vision & Mission');setText('#network .lead-in h2','Nine offices covering Saudi ports');setText('#network .lead-in p','We operate across the Kingdom through offices serving the Eastern and Western port regions.');setText('#contact .lead-in h2','Send your enquiry to the right office');setText('#contact .lead-in p','Select a service and port; we will route your message to the Dammam or Jeddah office by region.');document.querySelectorAll('.svc h3').forEach(function(e){var k=e.textContent.trim();if(serviceNames[k])e.textContent=serviceNames[k];});document.querySelectorAll('.svc p').forEach(function(e){if(e.textContent.trim())e.textContent='Reliable local support, clear documentation and disciplined port-call execution.';});document.querySelectorAll('.svc .go').forEach(function(e){e.textContent='View service details →';});var vision=['Vision','Mission'];var visionCopy=['To be a regional leader by keeping our promises, exceeding expectations and building long-term relationships with customers and partners.','Sharaf Shipping Agency delivers integrated marine, logistics and port services with high standards of quality and safety. We help clients reduce cost, improve revenue and strengthen the supply chain.'];document.querySelectorAll('.vv-card').forEach(function(card,i){var h=card.querySelector('h3'),p=card.querySelector('p');if(h)h.textContent=vision[i];if(p)p.textContent=visionCopy[i];});var scopes=['Port agency','Container services','Tanker services','Dry and break-bulk cargo','Project cargo','Logistics','Freight forwarding','Offshore services'];document.querySelectorAll('.scope span').forEach(function(s,i){if(scopes[i])s.textContent=scopes[i];}); }
    else if(key.indexOf('services-details')>=0 || services[key]) renderService(key); else renderCore(key);
    translateOfficeAddresses();
    document.querySelectorAll('.gterm').forEach(function(t){var term=t.querySelector('b'),p=t.querySelector('p'),i=t.querySelector('i');if(term&&p){p.textContent=term.textContent+' — a standard term used in shipping, trade or port operations.';}if(i)i.textContent='English definition';});
    if(key==='home'){document.title='Sharaf Shipping Agency Co. Ltd · Saudi Arabia';setText('#glossary .lead-in p','A practical reference of 94 shipping and trade terms with clear explanations. Search by term or keyword.');document.querySelectorAll('#glossary .gterm').forEach(function(t){var term=t.querySelector('b'),p=t.querySelector('p'),i=t.querySelector('i');if(term&&p)p.textContent=term.textContent+' — a standard term used in shipping, trade or port operations.';if(i)i.textContent='English definition';});setText('#glossary .btn','Full glossary — 94 terms');var about=document.querySelector('.foot .about');if(about)about.textContent='Sharaf Shipping Agency Co. Ltd — Kingdom of Saudi Arabia. A marine agency, freight and logistics partner established in 2007 as part of the Sharaf Group, with nine offices covering the Kingdom’s Eastern and Western ports.';}
    document.querySelectorAll('.burger').forEach(function(b){b.textContent=b.getAttribute('aria-expanded')==='true'?'Close':'Menu'; b.addEventListener('click',function(){setTimeout(function(){b.textContent=b.getAttribute('aria-expanded')==='true'?'Close':'Menu';},0);});});
    document.querySelectorAll('.mark img,.fmark img').forEach(function(img){img.alt='Sharaf Shipping Agency logo';});
    var refresh=function(){setTimeout(function(){translateDynamicPorts();translateCommon();},0);};
    var pl=document.getElementById('port-list'); if(pl)pl.addEventListener('click',refresh);
    var pj=document.getElementById('port-jump'); if(pj)pj.addEventListener('change',refresh);
  }
  function arabic() { addToggle(); }
  function run(){ if((localStorage.getItem('sharaf-language')||'ar')==='en') english(); else arabic(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
})();
