class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :presets

  def self.generate_session_token
    SecureRandom.urlsafe_base64(128)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.valid_password?(password) ? user : nil
  end

  def valid_password?(password)
    bcrypt = BCrypt::Password.new(self.password_digest)
    bcrypt.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
