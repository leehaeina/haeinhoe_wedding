import React, { useState } from 'react';

interface GuestbookProps {
  isVisible: boolean;
}

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  date: string;
}

const Guestbook: React.FC<GuestbookProps> = ({ isVisible }) => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: '김민수',
      message: '행복하게 잘 살겠습니다:)',
      date: '2025-05-15'
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (newEntry.name.trim() && newEntry.message.trim()) {
      const entry: GuestbookEntry = {
        id: Date.now(),
        name: newEntry.name.trim(),
        message: newEntry.message.trim(),
        date: new Date().toISOString().split('T')[0]
      };
      setEntries([entry, ...entries]);
      setNewEntry({ name: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setNewEntry({
      ...newEntry,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="guestbook" 
      className={`guestbook ${isVisible ? 'section-visible' : ''}`}
    >
      <h2>방명록</h2>
      
      <div className="guestbook-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>이름</label>
            <input 
              type="text" 
              name="name" 
              value={newEntry.name} 
              onChange={handleChange}
              placeholder="이름을 입력해주세요"
              required
            />
          </div>
          
          <div className="form-group">
            <label>축하 메시지</label>
            <textarea 
              name="message" 
              value={newEntry.message} 
              onChange={handleChange}
              placeholder="축하 메시지를 남겨주세요"
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            작성
          </button>
        </form>
      </div>

      <div className="guestbook-entries">
        {entries.map(entry => (
          <div key={entry.id} className="guestbook-entry">
            <div className="entry-name">{entry.name}</div>
            <div className="entry-message">{entry.message}</div>
            <div className="entry-date">{entry.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guestbook;
