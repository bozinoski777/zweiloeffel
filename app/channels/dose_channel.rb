class DoseChannel < ApplicationCable::Channel
  def subscribed
     stream_for Dose.all
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
