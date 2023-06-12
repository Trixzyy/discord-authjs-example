import { ReactNode } from 'react';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'

const NavLink = ({ children }: { children: ReactNode }) => {
  const linkBg = useColorModeValue('gray.200', 'gray.700');
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: linkBg,
      }}
      href={'#'}>
      {children}
    </Link>
  );
};

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  const emailColor = useColorModeValue('gray.700', 'gray.200');
  const boxBgColor = useColorModeValue('gray.100', 'gray.900');

  if (session) {
    const { user } = session;
    return (
      <>
        <Box bg={boxBgColor} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box><Text fontSize="2xl" as="b">Discord NextAuth</Text></Box>

            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={user?.image}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={user?.image}
                      />
                    </Center>
                    <br />
                    <Center>
                      <Text fontSize='22px' as="b">{user?.name}</Text>
                    </Center>
                    <center>
                      <Text fontSize='15px' color={emailColor}>{user?.email}</Text>
                    </center>
                    <MenuDivider />
                    <MenuItem>Your Account</MenuItem>
                    <MenuItem onClick={() => signOut()}><Text color={'tomato'}>Logout</Text></MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }
  return (
    <>
      <Box bg={boxBgColor} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Text fontSize="2xl" as="b">BetterUpload</Text></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                onClick={() => signIn()}
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.400'}
                href={'#'}
                _hover={{
                  bg: 'blue.300',
                }}>
                Sign In
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Home