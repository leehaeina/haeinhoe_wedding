import React, { useState } from 'react';

interface RSVPProps {
  isVisible: boolean;
}

const RSVP: React.FC<RSVPProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    side: '',
    attendance: '',
    meal: '',
    name: '',
    companion: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    alert('참석 여부가 전달되었습니다. 감사합니다!');
    // 여기서 실제로는 서버에 데이터를 전송
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="rsvp" 
      className={`rsvp ${isVisible ? 'section-visible' : ''}`}
    >
      <h2>참석 여부 전달</h2>
      <div className="rsvp-form">
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
          소중한 시간을 내어 결혼식에 참석해주시는 모든 분들께 감사드립니다.<br />
          예식이 지정좌석제로 진행되오니, 참석 여부를 회신해 주시면 더욱 감사하겠습니다.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>어느 측 하객이신가요? *</label>
            <select name="side" value={formData.side} onChange={handleChange} required>
              <option value="">선택해주세요</option>
              <option value="groom">신랑</option>
              <option value="bride">신부</option>
            </select>
          </div>

          <div className="form-group">
            <label>참석여부 *</label>
            <select name="attendance" value={formData.attendance} onChange={handleChange} required>
              <option value="">선택해주세요</option>
              <option value="yes">참석</option>
              <option value="no">불참석</option>
            </select>
          </div>

          <div className="form-group">
            <label>식사여부 *</label>
            <select name="meal" value={formData.meal} onChange={handleChange} required>
              <option value="">선택해주세요</option>
              <option value="yes">식사</option>
              <option value="no">식사 안함</option>
            </select>
          </div>

          <div className="form-group">
            <label>성함 *</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>동행인 성함</label>
            <input 
              type="text" 
              name="companion" 
              value={formData.companion} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label>전달사항</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              placeholder="전달하고 싶은 말씀이 있으시면 적어주세요"
            />
          </div>

          <button type="submit" className="submit-btn">
            전달
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
