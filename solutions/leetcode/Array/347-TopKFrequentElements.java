class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer , Integer>  m =  new HashMap<>();
        for(int i=0;i<nums.length;i++)
        {
            if(!m.containsKey(nums[i]))
            {
                m.put(nums[i] ,1);
            }
            else
            {
                m.put(nums[i],m.get(nums[i])+1);
            }
        }

        List<Map.Entry<Integer,Integer>> entryList = new ArrayList<>(m.entrySet());
        entryList.sort((a,b) -> b.getValue()-a.getValue());
        int[] result= new int[k];
        for(int i = 0;i<k;i++)
        {
            result[i] = entryList.get(i).getKey();
        }
        return result;
    }

}


-----
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer , Integer>  m =  new HashMap<>();
        for(int i=0;i<nums.length;i++)
        {
            if(!m.containsKey(nums[i]))
            {
                m.put(nums[i] ,1);
            }
            else
            {
                m.put(nums[i],m.get(nums[i])+1);
            }
        }

        List<Map.Entry<Integer,Integer>> entryList = new ArrayList<>(m.entrySet());
        entryList.sort((a,b) -> b.getValue()-a.getValue());
        int[] result= new int[k];
        for(int i = 0;i<k;i++)
        {
            result[i] = entryList.get(i).getKey();
        }
        return result;
    }

}
