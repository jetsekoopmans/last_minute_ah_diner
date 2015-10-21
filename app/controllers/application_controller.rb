class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  require 'open-uri'

  def index

    city = 'http://www.ahrestaurantactie.nl/search/Default.aspx?fh_location=//seatme/nl_NL/date%3E{20151021;30000101}/num_persons%3E{a2}/mam%3E{mam_1110;mam_1140;mam_1170;mam_1200;mam_1230;mam_1260;mam__1}/rid%3E{3062;2642;2643;2815;2838;3644;2843;4301;3369;4060;4216;4172;4177;4281;4008;3759;2293;3958;4157;3371;4262;2881;2839;4360;2842;2844;2836;2231;4288;2814;4148;4175;2875;2816;2813;2835;4052;4491;4389;4399;4425;4533;4540;4558;3376;4644;4665;4632;4708}'
    @restaus = []

    # Fetch and parse the city
    begin
      doc = Nokogiri::HTML(open(city))
    rescue => e
      puts "Error1"
      exit
    end

    # Check how many pages a city has and create correct links
    pages = []
    counter = 0
    doc.css('.bottom-changepagenr option').each do |link|
      pages << city.sub("fh_start_index=0", "fh_start_index=#{counter}")
      counter += 100
    end

    # Loop every page per city
    pages.each do |page|

      # Get links from open restaurants
      links = []
      doc.css('ul.resultsList').each do |link|
        link.css('a.timeslotPrev').each do |a|
          url = ""
          a.parent.css('a').each do |aa|
            if aa['href']
              url = aa['href']
              break
            end
          end

          links << "http://www.ahrestaurantactie.nl" + url
        end
      end

      # Loop every link from open restaurant
      links.each do |link|

        # Get all posible timeslots
        new_links = []
        new_links << link

        link_splitted = link.split("&time=")
        link_with_no_time = link_splitted[0]

        first_time = link_splitted[1].to_i

        second_time = first_time + 210
        new_links << link_with_no_time + "&time=" + second_time.to_s
        
        third_time = second_time + 210
        new_links << link_with_no_time + "&time=" + third_time.to_s

        puts new_links
        name = ""
        location = ""
        timeslots = []
        new_links.each do |new_link|
          begin
            doc = Nokogiri::HTML(open(new_link))
          rescue => e
            puts "Error3"
            next
          end

          next if doc.at_css('.expanded-availabilities')

          name = doc.css('h1').text
          location = doc.css('h2')[0].text

          doc.css('.timeValue').each do |timeslot|
            timeslots << timeslot.parent.text unless timeslots.include?(timeslot.parent.text)
          end
          
        end
        
        # puts name
        # puts location
        # puts timeslots
        restau = Hash["name" => name, "location" => location, "timeslots" => timeslots]
        @restaus << restau
      end

      begin
        doc = Nokogiri::HTML(open(page))
      rescue => e
        puts "Error2"
        next
      end
    end
  end
  # def index
  #   @restaus = [{"name"=>"Gaston Pure Food", "location"=>"Enschede, De Bothoven", "timeslots"=>["17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30", "21:45", "22:00"]}, {"name"=>"De Buurman - Restaurant de Dragonder", "location"=>"Hengelo, Centrum", "timeslots"=>["17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30"]}, {"name"=>"Het Seminar", "location"=>"Zenderen, Borne", "timeslots"=>["17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30"]}, {"name"=>"Brasserie de Beyaardier", "location"=>"Rijssen, Kern Rand Oost", "timeslots"=>["17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00"]}, {"name"=>"Restaurant-Pizzeria Sorrentino", "location"=>"Enschede, De Bothoven", "timeslots"=>["17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30", "21:45", "22:00"]}, {"name"=>"Landgoed het Rheins", "location"=>"Enter, Enter Zuid-West", "timeslots"=>["17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00"]}, {"name"=>"Savenije", "location"=>"Enschede, Buurtschap Lonneker-West", "timeslots"=>["17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00"]}]
  # end
end
