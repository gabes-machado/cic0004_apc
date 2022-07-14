# knowing that a foot is equal to 0.3048 meters, make a program thar converts foot to meters

foot = float(input('insert a length in foot: '))
convert_ratio = 0.3048

foot_to_meters = foot*convert_ratio
print(f'here it is the equivalent in meters: {foot_to_meters}m')
