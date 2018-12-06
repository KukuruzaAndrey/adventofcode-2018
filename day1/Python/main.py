def formatter(varstr):
  if varstr[0] == '-':
    mark = -1
  else:
    mark = 1
  intstring = varstr[1::]
  return int(intstring) * mark

def reader():
  file1 = open("/day1/input.txt","r")
  strarr = []
  strarr = file1.readlines()
  return strarr
  
def main():
  sum1 = 0 
  workarray = reader()
  for i in range(0, len(workarray)):
    print(sum1)
    sum1 = sum1 + formatter(workarray[i])
  print(sum1)

main()
