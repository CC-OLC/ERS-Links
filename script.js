function formatDate(date) {
    return date.toISOString().split('T')[0];
  }
  
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 7);
  
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + 60);
  
  const formattedStart = formatDate(startDate);
  const formattedEnd = formatDate(endDate);
  
  const baseUrl = "https://app.eresourcescheduler.cloud/#!/gantt?param=";
  
  const links = [
    {
      name: "Default View (Today -7 to +60)",
      param: {
        start: formattedStart,
        end: formattedEnd,
        view: 1
      }
    },
    {
      name: "Default View + Filtered by 'eConestoga Support' Tag",
      param: {
        start: formattedStart,
        end: formattedEnd,
        view: 1,
        resFilter: [
          {
            code: "tags",
            id: 32,
            filterType: 121,
            multiValue: [71] // Tag ID for eConestoga Support
          }
        ]
      }
    },
    {
      name: "Default View + Filtered by 'Technical Services' Tag",
      param: {
        start: formattedStart,
        end: formattedEnd,
        view: 1,
        resFilter: [
          {
            code: "tags",
            id: 32,
            filterType: 121,
            multiValue: [1] // Tag ID for Technical Services
          }
        ]
      }
    }
  ];
  
  const list = document.getElementById("link-list");
  
  links.forEach(link => {
    const encodedParam = encodeURIComponent(JSON.stringify(link.param));
    const url = `${baseUrl}${encodedParam}`;
  
    const li = document.createElement("li");
    li.className = "list-group-item";
  
    const a = document.createElement("a");
    a.href = url;
    a.textContent = link.name;
    a.target = "_self";
    a.className = "text-decoration-none";
  
    li.appendChild(a);
    list.appendChild(li);
  });
  