require 'faker'

puts "Planting seeds...🌱"

User.destroy_all
Place.destroy_all
Content.destroy_all

puts "Creating users...👨‍💻"
20.times do
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        location: Faker::Address.state,
        age: rand(5..80),
        username: Faker::Internet.username(specifier: 5..10),
        avatar_img: Faker::Avatar.image,
        password: Faker::Internet.password(min_length: 2, max_length: 4)
    )
end 

puts "Creating default places...🗺️"

Place.create(name: "Vail Ski Resort", address: "Vail, Colorado", image: "https://www.uncovercolorado.com/wp-content/uploads/2021/12/vail-terrain-runs-colorado-ski-resort.jpeg", elevation:	8120, hours: "9AM-5PM", kid_friendly: true, category: "Ski Resort", user_id: rand(1..20))
Place.create(name: "Beaver Creek Resort", address: "210 Beaver Creek Plaza, Beaver Creek, CO 81620", image: "https://dam-assets.vailresorts.com/is/image/vailresorts/BC_FeaturedContentElement_WinterAerial_600x400?resMode=sharp2&wid=565&fit=constrain,1&dpr=on,1.75", elevation: 8100, hours: "7AM-6PM", kid_friendly: true, category: "Ski Resort", user_id: rand(1..20))
Place.create(name: "Breckenridge Ski Resort", address: "1599 Ski Hill Rd, Breckenridge, CO 80424", image: "https://cdn.ski/MGQzijCEkgVzhCAR.webp:xl", elevation: 9600, hours: "9:30AM-4PM", kid_friendly: true, category: "Ski Resort", user_id: rand(1..20))
Place.create(name: "Aspen Snowmass Ski Resort", address: "120 Lower, Carriage Way, Snowmass Village, CO 81615", image: "https://www.snowmagazine.com/images/ski-resorts/usa/snowmass-snowmass.jpg", elevation: 8104, hours: "10AM-5PM", kid_friendly: true, category: "Ski Resort", user_id: rand(1..20))
Place.create(name: "Iron Mountain Hot Springs", address: "281 Centennial St, Glenwood Springs, CO 81601", image: "https://i0.wp.com/images.ski.com/media/vr-mr-blog/ironmountain.jpg?w=750", elevation: 5761, hours: "9AM-10PM", kid_friendly: true, category: "Hot Springs", user_id: rand(1..20))
Place.create(name: "Ouray Hot Springs", address: "1220 Main St, Ouray, CO 81427", image: "https://ridgwaycolorado.com/templates/yootheme/cache/34/ouray-hot-springs-pool-349a5656.jpeg", elevation:	7792, hours: "11AM-12PM", kid_friendly:	true, category: "Hot Springs", user_id: rand(1..20))
Place.create(name: "Hot Sulphur Springs Resort & Spa", address:	"5609 Spring Rd, Hot Sulphur Springs, CO 80451", image: "https://jessieonajourney.com/wp-content/uploads/2015/11/springs.jpg", elevation: 7680, hours: "8AM-10PM", kid_friendly: true, category: "Hot Springs", user_id: rand(1..20))
Place.create(name: "Mount Princeton Hot Springs Resort", address: "15870 Co Rd 162, Nathrop, CO 81236", image: "https://www.colorado.com/sites/default/files/listing_images/profile/7984/bath-house_124.jpg", elevation: 8250, hours: "9AM-9PM", kid_friendly: true, category: "Hot Springs", user_id: rand(1..20))
Place.create(name: "Keystone Lake Ice Rink", address: "Decatur Rd, Keystone, CO 80435", image: "https://s4893.pcdn.co/wp-content/uploads/2015/10/Lakeside-Village-Christmas.jpg", elevation: 9321, hours: "10AM-5PM", kid_friendly:	true, category: "Ice Skating", user_id: rand(1..20))
Place.create(name: "The rink at Evergreen Lake", address: "29612 Upper Bear Creek Rd, Evergreen, CO 80439", image: "https://images.303magazine.com/uploads/2017/02/skating.jpg", elevation:	7165, hours: "8AM-7PM", kid_friendly: true, category: "Ice Skating", user_id: rand(1..20))
Place.create(name: "Ameristar Black Hawk", address:	"111 Richman St, Black Hawk, CO 80422", image: "https://assets.simpleviewinc.com/simpleview/image/upload/crm/denver/ABH_hero-pic0_fe372330-c5df-aee0-4a10ff5711c778d1.jpg", elevation: 8537, hours: "Open 24 hours", kid_friendly: false, category: "Casino", user_id: rand(1..20))
Place.create(name: "Bally's Casino", address: "300 Main St, Black Hawk, CO 80422", image: "https://www.casinosavenue.com/upload/photoCasino/9466_bally-s-black-hawk-north-casino.jpeg", elevation: 8537, hours: "8AM-2AM", kid_friendly: false, category: "Casino", user_id: rand(1..20))
Place.create(name: "Thunder Valley Park", address: "701 S Rooney Rd, Morrison, CO 80465", image: "https://www.speedsport.com/wp-content/uploads/sites/44/2022/06/12/kenroczen.jpg", elevation: 6100, hours: "10AM-5PM", kid_friendly: true, category: "Motocross", user_id: rand(1..20))
Place.create(name: "Aztec Family Raceway", address:	"12400 CO-94, Colorado Springs, CO 80929", image: "https://lh3.googleusercontent.com/p/AF1QipNBvhuXwZ7mtQx83PvRrUU2Tzro8NDZNOzebdYf=s1360-w1360-h1020", elevation: 6200, hours: "10AM-3PM", kid_friendly: true, category: "Motocross", user_id: rand(1..20))
Place.create(name: "Leadville Motocross Park", address:	"Co Rd 45, Leadville, CO 80461", image: "http://pulpmx.com/app/uploads/2019/07/IMG_3846-1024x683.jpg", elevation: 10000, hours: "10AM-6PM", kid_friendly: true, category: "Motocross", user_id: rand(1..20))
Place.create(name: "Bandimere Speedway", address: "3051 S Rooney Rd, Morrison, CO 80465", image: "https://bandimere.com/wp-content/uploads/2020/02/BS-Web-Photo-Sunset-2020-02.jpg", elevation:	5800, hours: "8:30AM-4:30PM", kid_friendly: true, category: "Speedracing", user_id: rand(1..20))
Place.create(name: "K1 Speed", address:	"8034 Midway Dr, Littleton, CO 80125", image: "https://www.k1speed.com/wp-content/uploads/2020/06/a-n-d-racing.jpg", elevation:	5351, hours: "10AM-10PM", kid_friendly: true, category: "Speedracing", user_id: rand(1..20))

puts "Creating content...🚽"

40.times do
    Content.create(
        comment: Faker::Lorem.paragraph_by_chars(number: 100, supplemental: false),
        rating: rand(0..5), 
        user_id: rand(1..20), 
        place_id: rand(1..17)
    )
end

puts "Grow baby grow! 👨🏻‍🌾"