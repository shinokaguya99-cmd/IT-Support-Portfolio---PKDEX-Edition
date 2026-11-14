import { useState } from 'react';
import './ToolsDex.css';

// Edit descriptions to reflect your experience. Fill empty entries to add tools.
const tools = [
  { name: 'ServiceNow', icon: '🎫', category: 'Service Management', description: 'Incident and request tracking, ticket updates, and support documentation.' },
  { name: 'iTop', icon: '🗂️', category: 'Service Management', description: 'Service desk ticket management, asset records, and knowledge documentation.' },
  { name: 'Microsoft Intune', icon: '💻', category: 'Device Management', description: 'Endpoint management, device configuration, and application deployment.' },
  { name: 'Microsoft 365', icon: '📧', category: 'Productivity', description: 'Support for Outlook, Teams, OneDrive, and Microsoft 365 applications.' },
  { name: 'Azure AD / Entra ID', icon: '☁️', category: 'Cloud Identity', description: 'Cloud user accounts and access management.' },
  { name: 'Active Directory', icon: '🖥️', category: 'Identity Management', description: 'Domain accounts, password resets, account unlocking, and computer management.' },
  { name: '', icon: '', category: '', description: '' },
  { name: '', icon: '', category: '', description: '' },
  { name: '', icon: '', category: '', description: '' },
  { name: '', icon: '', category: '', description: '' },
  { name: '', icon: '', category: '', description: '' },
  { name: '', icon: '', category: '', description: '' },
];

export default function ToolsDex() {
  const [selectedIndex, setSelectedIndex] = useState(() => tools.findIndex(t => t.name));
  const selected = tools[selectedIndex];
  const registered = tools.filter(t => t.name).length;
  return (
    <section id="tools" className="itdex" aria-labelledby="itdex-title">
      <p className="itdex-eyebrow">MY TECH INVENTORY</p>
      <h2 id="itdex-title">IT Tools Pokédex</h2>
      <p className="itdex-intro">Explore the platforms I work with as an IT Support professional.</p>
      <div className="itdex-shell">
        <div className="itdex-header"><span>IT TOOLDEX</span><span>{registered} TOOLS REGISTERED</span></div>
        <div className="itdex-grid" role="group" aria-label="Choose an IT tool">
          {tools.map((tool, index) => (
            <button key={index} type="button" disabled={!tool.name}
              aria-pressed={Boolean(tool.name) && selectedIndex === index}
              className={`itdex-slot ${tool.name && selectedIndex === index ? 'is-selected' : ''} ${!tool.name ? 'is-empty' : ''}`}
              onClick={() => setSelectedIndex(index)}>
              <span className="itdex-number">#{String(index + 1).padStart(3, '0')}</span>
              <span className="itdex-icon" aria-hidden="true">{tool.name ? tool.icon : '+'}</span>
              <span className="itdex-name">{tool.name || 'Future Tool'}</span>
            </button>
          ))}
        </div>
        <div className="itdex-details" aria-live="polite" aria-atomic="true">
          {selected ? <><span className="itdex-category">{selected.category}</span><h3>{selected.name}</h3><p>{selected.description}</p></> : <p>Add your first tool to start your collection.</p>}
        </div>
        <div className="itdex-footer"><span>SELECT A TOOL TO EXPLORE</span><span>LEARNING NEVER STOPS ✦</span></div>
      </div>
    </section>
  );
}
